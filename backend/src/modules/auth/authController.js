import * as AuthService from "./auth.service.js";

export const register = async (req, res, next) => {
    try {
        res.json(await AuthService.register(req.body));
    } catch (e) {
        next(e);
    }
};

export const verifyOtp = async (req, res, next) => {
    try {
        res.json(await AuthService.verifyOtp(req.body));
    } catch (e) {
        next(e);
    }
};

export const login = async (req, res, next) => {
    try {
        const tokens = await AuthService.login(req.body);
        res
            .cookie("refreshToken", tokens.refreshToken, {
                httpOnly: true,
                secure: true,
            })
            .json({ accessToken: tokens.accessToken });
    } catch (e) {
        next(e);
    }
};
