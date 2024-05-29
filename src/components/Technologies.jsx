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
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opcaity: 1, y: 0}}
        initial={{ opcaity: 1, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl"> Technologies</motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x:1.5}}
            transition={{ duration: 1.5}}
            className="flex flex-wrap justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <FaHtml5 className="text-6xl text-red-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-6xl text-blue-500"/>
                </motion.div>

                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className="text-6xl text-yellow-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-6xl text-white-800"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-6xl text-yellow-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-6xl text-white-900"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVisualstudio className="text-6xl text-purple-800"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrMysql className="text-6xl text-blue-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(6.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-6xl text-orange-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-6xl text-red-700"/>
                </motion.div>       
            </motion.div>

        </div>


    </div>
    );
};

export default Technologies
