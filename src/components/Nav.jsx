import logo from "/icon.svg";
const Nav = () => {
  // Add navigation scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");

    if (window.scrollY > (innerWidth < 576 ? 30 : 60)) {
      navbar.style.backgroundColor = "white";
      navbar.style.height = "54px";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.height = "80px";
    }
  });
  return (
    <>
      <nav className="flex justify-between items-center h-20 w-screen px-10 fixed top-0 z-30 transition-all delay-75 duration-200 ease-in">
        <button className="nav-button-lg px-3 py-2 bg-gradient-to-r from-orange-300 to-rose-400 rounded-md text-white text-lg shadow-lg hidden sm:block transition-all duration-1000 hover:scale-95">
          موقع التسجيل الالكتروني الاولي
        </button>
        <button className="w-6 h-6 cursor-pointer sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <a className="flex w-fit items-center" href="/">
          <p className=" text-gray-500 text-xs sm:text-lg">
            معرفة بلا حدود للتعليم والتكوين عن بعد
          </p>
          <img src={logo} alt="logo" className="w-11 h-11 p-1" />
        </a>
      </nav>
    </>
  );
};

export default Nav;
