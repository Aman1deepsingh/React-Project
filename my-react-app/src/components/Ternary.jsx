
export default function Ternary() {
    function renderApp() {
        return "Welcome";
    }

    function renderLogin() {
        return "Please Login";
    }
    const authenticated = true;
  return (
    <>
        <p>{ authenticated ? renderApp() : renderLogin() }</p>
    </>
  )
}