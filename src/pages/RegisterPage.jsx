import { useReducer } from "react";
const initialState = { name: "", email: "", password: "" };
function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}
export default function RegisterPage() {
  const [form, dispatch] = useReducer(reducer, initialState);
  function handleChange(e) {
    dispatch({ field: e.target.name, value: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${form.name}, Email: ${form.email}`);
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Typing: {form.name} / {form.email}
      </p>
    </>
  );
}
