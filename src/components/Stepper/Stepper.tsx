type StepperProps = {
  quantity: number,
  increment: () => void,
  decrement: () => void
}

export const Stepper = (props:StepperProps) => {


  return (
    <div className="stepper">
      <button onClick={props.decrement}>-</button>
      <input type="number" value={props.quantity} />
      <button onClick={props.increment}>+</button>
    </div>
  )
}