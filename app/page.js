import Link from "next/link";
import Container from "postcss/lib/container";

export default function Home() {
  const centerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    border: "2px solid #ccc",
    padding: "20px"
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    margin: '10px',
  };
  const container={
    display: 'flex',
  justify: 'center',
  align: 'center',
  background:'#0a0909'
  }
  const llala={
    color:'white'
  }
  return (
    <main>
      <div style={container}>
      <div style={centerStyle}>
        <h1 style={llala}>Next.js Complete Course</h1>
        <Link href="/users" style={linkStyle}>
          Users Details
        </Link>
      </div>
      </div>
    </main>
  );
}