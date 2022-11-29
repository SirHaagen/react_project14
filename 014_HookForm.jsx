
import { useForm } from "react-hook-form";

const HookForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log(useForm())

  const onSubmit = (data, e) =>{
    console.log(data);
    e.target.reset();
  } 

  return (<>

    <h1>Formulario</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" name="name" autoComplete="off" placeholder="Enter your name" {...register("name", {
        required: { value: true, message: "Required field" },
        minLength: { value: 5, message: "minimum 5 characters" }
      })} />
      {errors.name && <span>{errors.name.message}</span>}
      <input type="email" name="email" autoComplete="off" placeholder="Enter your email" {...register("email", {
        required:{value: true, message: "Required field" },
        pattern: { value: /[^@\s]+\@[^@\s]+\.[^@\s]+/, message: "Incorrect email" }
      })} />
      <span>{errors?.email?.message}</span>
      <input type="submit" value="Send" />

    </form>

  </>)


}

export default HookForm;