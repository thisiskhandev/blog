import Link from "next/link";

const Header = () => {
  return (
    <header>
      <section>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">BlogApp</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li tabIndex={0}>
                <Link href={"/services"}>
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link href={"/services-1"}>Services 1</Link>
                  </li>
                  <li>
                    <Link href={"/services-2"}>Services 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
