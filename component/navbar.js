import Image from "next/image";
import call from '../public/call.jpg'

function Header() {
  return (
    <div>
      <div>
        <Image
          src={call}
          alt="callButton"
          width="32"
          height="32"
        />
        <p>Order now!!</p>
        <p>0123456789</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Header;
