"use client";
export default function Register() {
    return (
        <>
            <h1>Register</h1>
            <form method="post" action="/api/auth/register">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
}
