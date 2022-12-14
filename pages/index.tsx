import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <p className={styles.title}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat nesciunt amet reprehenderit rerum! Distinctio illum
                neque architecto delectus vel quod velit culpa vitae, minima
                doloremque mollitia at voluptates obcaecati quas!
            </p>
            <Link href="/mall">Go to Mall</Link>
        </>
    );
}
