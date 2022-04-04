
const Error:React.FC<{message:string}> = ({message}) => {
  return(<div>Error: {message}</div>
  );
}

export { Error as default }