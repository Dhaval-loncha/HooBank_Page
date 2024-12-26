import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<div
				className={`${
					scroll ? "fixed z-[50] bg-black-gradient-2 py-2 pr-1 top-5 object-contain rounded" : ""
				}`}
			>
				<a href="https://dhaval-hoobank-page.netlify.app/">
					<img src={logo} alt="hoobank" className={`w-[124px] h-[32px] `} />
				</a>
			</div>
			<div className={`${scroll ? "fixed z-[50] p-2 top-5 right-14 object-contain rounded" : ""}`}>
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10   ${
								index === navLinks.length - 1 ? "mr-0" : "mr-10"
							} ${scroll ? "bg-black-gradient p-1 rounded " : "hover:border-b-2"} `}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>

			<div
				className={`${
					scroll
						? "fixed sm:hidden right-5 top-5 z-[50] bg-black-gradient-2 p-2 object-contain rounded"
						: "sm:hidden flex flex-1 justify-end items-center "
				}`}
			>
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  ${
						scroll ? "mr-0 mt-0" : "mt-2 mr-4"
					}`}
				>
					<ul className="list-none flex justify-end items-center flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
									index === navLinks.length - 1 ? "mr-0" : "mb-4"
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
