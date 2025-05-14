import ButtonAction from "./ButtonAction";

export default function SubscribeForm() {
  return (
    <form>
      <label htmlFor="email">
        <h5>Email address</h5>
      </label>
      <input type="text" name="email" placeholder=" email@company.com" />
      <ButtonAction text="Subscribe to monthly newsletter" />
    </form>
  );
}
