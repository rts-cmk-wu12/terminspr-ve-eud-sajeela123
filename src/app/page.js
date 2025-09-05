"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Welcome() {
    const [showButton, setShowButton] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        router.push("/activities");
    };

    return (
        <div
            className={styles.wrapper}
            style={{
                backgroundImage: "url('/baggrund.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className={styles.logoContainer}>
                <Image
                    src="/Logo.png"
                    alt="logo"
                    width={341}
                    height={153}
                    priority
                />
            </div>

            {showButton && (
                <button
                    className={`${styles.startButton} ${showButton ? styles.show : ""}`}
                    onClick={handleClick}
                >
                    kom i gang
                </button>
            )}
        </div>
    );
}
