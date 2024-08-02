import { Fade } from "react-awesome-reveal";
import laptop from "../assets/img/laptop.png";

const Header = () => {
  function createBubble() {
    const container = document.querySelector("header");
    const bubble = document.createElement("div");

    var size = Math.random() * 100;
    var position = Math.random() * innerWidth;

    bubble.style.height = size + "px";
    bubble.style.width = size + "px";
    bubble.style.left = position + "px";
    bubble.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    bubble.style.setProperty(
      "--bubble-direction",
      (Math.round(Math.random()) * 2 - 1) * (Math.random() * 100) +
        position +
        "px"
    ); //bubble movement 0 to-100 or 0 to +100
    bubble.style.animationDuration = Math.random() * 5 + 20 + "s"; // Random duration between 20s and 25s
    bubble.classList.add("bubble");
    container.appendChild(bubble);

    bubble.addEventListener("click", () => {
      bubble.remove();
    });

    setTimeout(() => {
      bubble.remove();
    }, 30000);
  }

  setInterval(() => {
    createBubble();
  }, 10000);

  return (
    <>
      <header className="flex items-center justify-around flex-col relative w-screen h-full bg-banner-bg bg-cover bg-center bg-no-repeat">
        <div className="w-5/6 flex justify-start items-center flex-col text-center text-white pt-14 z-10 sm:w-2/3">
          <Fade
            duration={2000}
            cascade
            direction="up"
            fraction={0.8}
            triggerOnce
          >
            <h1 className=" text-2xl font-bold mb-3 mt-20 sm:text-4xl">
              مرحبا بكم في موقع التسجيل الإلكتروني الأولي
            </h1>
            <hr className="w-36 border-white border-solid my-3" />
            <p className=" text-sm my-3">
              يسعدنا الترحيب بكم في هذا الفضاء لاطلاعكم على كل ما يخص التمدرس في
              معرفة بلا حدود ،و على مستجدات السنة الدراسية{" "}
              {new Date().getFullYear()}/{new Date().getFullYear() - 1}
            </p>
            <button className=" py-2 px-5 mt-9 mb-3 bg-gradient-to-br from-green-300 to-green-500 text-white text-lg shadow-lg rounded-md hover:scale-105">
              سجل الان
            </button>
          </Fade>
        </div>
        <div className="z-20">
          <Fade duration={1000} triggerOnce>
            <img
              className=" w-[380px] my-12 sm:w-[650px]"
              src={laptop}
              alt="laptop"
            />
          </Fade>
        </div>
      </header>
    </>
  );
};

export default Header;
