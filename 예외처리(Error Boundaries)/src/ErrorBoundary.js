import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return (
        <>
          <h1>Error화면입니다.</h1>
          error boundary의 state.hasError가 바뀌지 않기 때문에
          <br />
          props를 바꿔도 Error화면이 사라지고 다시 render되지 않습니다.
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
