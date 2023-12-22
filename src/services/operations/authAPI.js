import axios from "axios";
import { authEndpoints } from "../apis";
import { toast } from "react-hot-toast";

const {
	SENDOTP_API,
	SIGNUP_API,
	LOGIN_API,
	LOGIN_NUMBER_API,
	RESETPASSTOKEN_API,
	RESETPASSWORD_API,
	SIGNUP_GOOGLE_API,
	LOGIN_GOOGLE_API,
} = authEndpoints;

export const LogIN = async (body, navigate) => {
	try {
		const response = await axios.post(LOGIN_API, body);
		console.log("Authentication Done!");
		localStorage.setItem("Plinth2k24AdminToken", JSON.stringify(response.data.token));
		navigate("/");
		return response;
	} catch (err) {
		console.log(err);
		toast.error(err.response?.data.message)
		console.log("Error while Login Authentication in Frontend!");
		return 
	}
};

export const SignUP = async (body, navigate) => {
	try {
		const response = await axios.post(SIGNUP_API, body);
		console.log("Authentication Done!");
		navigate("/login");
		toast.success("Signed Up Successfully");
		return response;
	} catch (err) {
		console.log(err);
		console.log("Error while Signup Authentication in Frontend!");
	}
};

export const SendOtp = async (email, navigate) => {
	try {
		const response = await axios.post(SENDOTP_API, {email});
		console.log("OTP Sent!");
		if (!response.data.success) {
			throw new Error(response.data.message);
		}
		toast.success("OTP Sent Successfully");
		navigate("/verify-email");
		return response;
	} catch (err) {
		console.log("SENDOTP API ERROR............", err);
		toast.error("Could Not Send OTP");
	}
};

export const getResetPasswordToken = async (email, setEmailSent) => {
	try {
		const response = await axios.post(RESETPASSTOKEN_API, {email});
		console.log("RESET PASSWORD TOKEN RESPONSE....", response);
		toast.success("Reset Email Sent");
		setEmailSent(true);
	} catch (err) {
		console.log("RESET PASSWORD TOKEN Error", err);
		toast.error("Failed to send email for resetting password");
	}
};

export const resetPassword = async (
	password,
	confirmPassword,
	token,
	navigate
) => {
	try {
		const response = await axios.post(RESETPASSWORD_API, {
			password,
			confirmPassword,
			token,
		});
		console.log("RESET Password RESPONSE ... ", response);
		toast.success("Password has been reset successfully");
		navigate("/login");
	} catch (err) {
		console.log("RESET PASSWORD TOKEN Error", err);
		toast.error("Unable to reset password");
	}
};

export const Logout = async (navigate) => {
	const toastId = toast.loading("Loading...");
	try {
		localStorage.removeItem("token");
		toast.success("Logged Out Successfully");
		toast.dismiss(toastId);
		navigate("/");
	} catch (err) {
		console.log(err);
		console.log("Error while Logging Out!");
	}
	toast.dismiss(toastId);
};
