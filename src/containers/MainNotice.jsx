import React from "react";
import jenniferImg from "../assets/images/jenniferImage.jpg";
import aliciaImg from "../assets/images/aliciaImage.jpg";
import juanImg from "../assets/images/juanImage.jpg";

const MainNotice = () => {
  return (
    <main className="pb-[100px]">
      <h2></h2>
      <section className="flex  justify-evenly">
        <article className="flex flex-col items-center w-[300px] gap-5 ">
          <i class="text-slate-400 text-3xl fa-solid fa-quote-left"></i>
          <p className="text-center DM font-semibold text-slate-700">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img src={jenniferImg} alt="" className="rounded-[50%]" />
          <h3 className="DM text-sm font-semibold text-slate-700">
            JENNIFER LEWIS
          </h3>
        </article>

        <article className="flex flex-col items-center w-[300px] gap-5 ">
          <i class="text-slate-400 text-3xl fa-solid fa-quote-left"></i>
          <p className="text-center DM font-semibold text-slate-700">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img src={aliciaImg} alt="" className="rounded-[50%]" />
          <h3 className="DM text-sm font-semibold text-slate-700">
            ALICIA HEART
          </h3>
        </article>

        <article className="flex flex-col items-center w-[300px] gap-5 ">
          <i class="text-slate-400 text-3xl fa-solid fa-quote-left"></i>
          <p className="text-center DM font-semibold text-slate-700">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <img src={juanImg} alt="" className="rounded-[50%]" />
          <h3 className="DM text-sm font-semibold text-slate-700">
            JUAN CARLOS
          </h3>
        </article>
      </section>
    </main>
  );
};

export default MainNotice;
