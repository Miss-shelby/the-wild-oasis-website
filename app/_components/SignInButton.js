import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
    <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
      <img
        src='https://authjs.dev/img/providers/google.svg'
        alt='Google logo'
        height='24'
        width='24'
      />
      <span>Continue with Google</span>
    </button>
    </form>
  );
}

export default SignInButton;
//we cant use onclick on server rather we use server action,server action allows us to add interactivity to server components
//usually to forms,we connect server action to a form,in our case we wrap our button with
// a from so when the button is clicked the  form will be  submitted and the action passed in the form will get executed
