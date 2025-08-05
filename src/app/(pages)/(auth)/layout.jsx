import WebLogo from "@/components/logo";

export default function Layout({ children }) {
  return (
    <div className="center-page">
      <WebLogo />
      <div className="text-lg font-bold">Halaman Authentikasi</div>
      <>{children}</>
    </div>
  );
}
