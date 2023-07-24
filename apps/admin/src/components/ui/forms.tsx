import { ErrorMessage } from '@hookform/error-message';


function CustomInputForm({ register, errors, inputLabel, registerName }: any) {

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{inputLabel}</span>
      </label>
      <input
        placeholder="Type here"
        className="input input-bordered w-full"
        {...register(registerName, { required: "This field is required" })}
      />
      <ErrorMessage
        errors={errors}
        name={registerName}
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />
    </div>
  )
}

export { CustomInputForm }