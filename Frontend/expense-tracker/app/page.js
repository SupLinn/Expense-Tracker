import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h2>Hello here!!!</h2>
      <Button
      variant = "outline"
      >Button</Button>
    </div>
  );
}
