interface GreetingProps {
  name: string;
  messageCount: number;
}

function Greeting ({name, messageCount}: GreetingProps) {
  return (
    <div>
      <h1>Hello,{name}!</h1>
      <p>You have {messageCount} message.</p>
    </div>
  );
}

export default Greeting;