import img from "../assets/img/img-1.png";
import shape from "../assets/img/shape.svg";

const About = () => {
  return (
    <>
      <section className="pt-10 flex justify-center">
        <div className="w-full h-full absolute flex justify-end items-center">
          <img src={shape} alt="shape" className="" />
        </div>

        <div className="flex justify-between flex-wrap w-10/12 z-10">
          <div className="w-full sm:w-5/12 mb-12">
            <img src={img} alt="img-1" />
          </div>
          <div className="w-full sm:w-5/12">
            <hr className="w-36 border-rose-500 border-2 border-solid mb-3" />
            <h1 className="mb-10 text-md sm:text-3xl font-bold tracking-tight text-center">
              وهناك 4 ارضيات تعليمية الكترونية موجهة للمتعلمين عن بعد هي
              كالتالي:<span className="opacity-0">نقطتين</span>
            </h1>
            <div className="flex flex-col items-center space-y-5">
              <a
                className="text-blue-400 text-sm hover:cursor-pointer hover:text-blue-800"
                href="#"
              >
                الأرضية الإلكترونية للذكاء الاصطناعي على الرابط
              </a>

              <a
                className="text-blue-400 text-sm hover:cursor-pointer hover:text-blue-800"
                href="#"
              >
                الأرضية التعليمية لللأمن السيبراني على الرابط
              </a>
              <a
                className="text-blue-400 text-sm hover:cursor-pointer hover:text-blue-800"
                href="#"
              >
                الأرضية الالكترونية لتطوير الويب
              </a>
              <a
                className="text-blue-400 text-sm hover:cursor-pointer hover:text-blue-800"
                href="#"
              >
                و أخرى خاصة بعلوم البيانات
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
