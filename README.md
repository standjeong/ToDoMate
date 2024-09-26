## 🤝 ToDoMate  소개
- 오늘 할 일을 계획하여 기록하고, 하루의 목표를 달성할 수 있도록 도와주는 어플리케이션입니다.

## ✨기능
- 할 일 기록
- 진행 중인 일과 완료한 일을 구분할 수 있는 필터 기능
- 전체 삭제 기능
- 목표 달성률을 한눈에 확인할 수 있는 차트 제공
- 달성률에 따라서 시시각각 변하는 격려 메시지로 실행력 UP!
- 다크모드 지원

## 🔨사용 도구

- React
- PostCSS
- Chart.js
- Figma
  <p> <img width='150' src='https://github.com/user-attachments/assets/3b253e39-c62c-4945-bfcc-b256245b7d4c'> </p>
## 😰개발 과정에서 만난 에러 & 어려웠던 점
- [X] **useState에 초깃값을 알맞게 설정하지 않았을 때 예상치 못한 에러 발생**
    1. input태그의 value를 useState hook을 사용해서 설정했는데 이때 `useState()`에 아무런 초깃값을 주지 않음. → 초깃값이 `undefined`으로 설정됨.  → 이 상태에서 입력 필드에 텍스트를 입력하면 리액트는 ‘A component is changing an uncontrolled input to be controlled.’ 라는 경고를 보냄.
        - 원인 : 리액트는 <input>의 value가 항상 문자열일 것을 기대하는데, `undefined`는 유효한 입력 값으로 처리되지 않기 때문에 리액트는 이 입력필드가 ‘제어되지 않는 상태'라고 판단함. 따라서 첫 렌더링 시 입력 필드가 제어되지 않는 상태로 시작함. 하지만 이 상태에서 입력필드에 값을 입력하면, React는 제어되지 않는 상태로 되어있는 것을 제어하려고 한다고 판단해서 경고를 발생시키는 것.
        - 해결 : `useState(’’)` 로 초기값을 빈 문자열로 설정해서 입력 필드를 항상 제어된 상태로 유지하기.
    2. 사용자가 입력한 할 일 목록을 관리하는 todos의 상태 훅에 초깃값을 빈 문자열로 준 상태에서 todo 리스트가 없는 상황에서 헤더에 있는 필터를 클릭하면 `todos.filter`는 function이 아니라는 에러가 발생
        - 원인 : TodoList컴포넌트는 함수를 통해 현재 선택된 필터에 해당하는 아이템만 필터링하여 반환해주는데, 이때 이 함수에서 배열에만 사용가능한 filter를 사용했기 때문. 따라서 todos의 값이 빈 문자열(`’’`)인 상태이면 배열에만 사용할 수 있는 filter api를 사용할 수 없기 때문에 에러 발생.
        - 해결 : todos의 상태 초깃값을 빈 배열(`[]`)로 설정해서 입력한 투두리스트가 없을 때도 동작하도록 만들기.

- [X] **도넛 차트 가운데에 커스텀 텍스트 넣기.**
    1. plugins을 통해 설정한 텍스트가 표시되지 않음.
        - 원인 & 해결 : <Doughnut /> 컴포넌트에 props로 plugins을 직접 넣어줬을 때만 텍스트가 표시됨. (만약 options에 plugins을 속성으로 넣어서 정의하면 텍스트가 표시되지 않음.)
        - 참고한 자료 : https://www.youtube.com/watch?v=9Qeo2Y7bVJ0
    2. 투두 리스트의 상태가 변할 때 plugins에서 설정한 커스텀 텍스트인 달성률(completionRate) 도 같이 업데이트되어서 렌더링되어야하는데, 달성률(completionRate)값만 업데이트되지 않음.
        - 원인 : Chart.js는 차트의 data로 설정한 값은 잘 업데이트하지만 차트의 data에서 가지고 있는 값이 아닌 외부에서 정의된 값을 plugins에서 그려내려고 하면 외부 값이 업데이트되더라도 그 값을 반영하지 않음.
        즉, plugins에서 외부에서 받아온 값으로 그려진 텍스트는 한번 그려진 후에는 페이지를 새로고침하지 않는 이상 다시 값을 받아오지 않으므로 업데이트된 값이 표시되지 않는 것.
            
            ⇒ 그래서 useEffect나 useState, useRef 등으로 chart를 다시 그려내도록 강제하더라도 plugins의  afterDatasetsDraw함수가 호출될 때 외부에서 받아온 값은 새로 읽어오지 않고 처음 받아온 값 그대로 가지고 있기 때문에 업데이트된 completionRate 값이 반영되지 않는 것.
            
        - 해결 방법1 : plugins의 afterDatasetsDraw 함수에 외부에서 계산된 값(completionRate)을 사용하지 말고, afterDatasetsDraw함수의 첫번째 인자로 전달되는 chart의 속성을 통해서 이 함수 안에서 chart의 data를 읽어와서 그 값으로 달성률을 새로 계산하여 fillText로 전달하기.
        - 해결 방법2 : plugins 속성을 아예 사용하지 않고 컴포넌트를 반환하는 곳에서 completionRate을 표시하도록 한 후 css를 통해 위치를 도넛 가운데로 직접 조정하기
