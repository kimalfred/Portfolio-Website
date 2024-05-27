import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl"> Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <FaHtml5 className="text-6xl text-red-500"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-6xl text-blue-500"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-6xl text-yellow-500"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-6xl text-white-800"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-6xl text-yellow-600"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-6xl text-white-900"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVisualstudio className="text-6xl text-purple-800"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className="text-6xl text-blue-600"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-6xl text-orange-600"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-6xl text-red-700"/>
                </div>       
            </div>

        </div>


    </div>
    );
};

export default Technologies
