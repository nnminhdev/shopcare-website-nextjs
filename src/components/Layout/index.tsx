import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};
export default DefaultLayout;
