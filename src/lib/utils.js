import { clsx } from "clsx";
import slugify from "slugify";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function toastAlert(type, message = "") {
  const msg =
    message ||
    (type === "success" ? "Berhasil" : type === "error" ? "Gagal" : "");

  toast[type](msg);
}

export async function handleSubmit(e, action, setLoading, setErrors, refresh) {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  try {
    let result = await action(formData);
    if (result.success) {
      toastAlert("success");
      setErrors({});
      refresh?.();
    } else {
      setErrors(result.errors || {});
    }
  } catch (error) {
    console.log({ error });

    toastAlert("error", "Terjadi kesalahan. Silakan coba lagi.");
  } finally {
    setLoading(false);
  }
}

export function generateSlug(value) {
  return slugify(value, { lower: true, strict: true });
}

export function strToUnderscore(text) {
  return text
    .toLowerCase() // lowercase semua huruf
    .replace(/[^\w\s-]/g, "") // hapus karakter aneh (selain huruf/angka/spasi)
    .replace(/\s+/g, "_") // ganti spasi jadi underscore
    .replace(/_+/g, "_") // hindari underscore berlebih
    .trim(); // hapus spasi di awal/akhir jika ada
}

export function formatTanggal(date) {
  return format(new Date(date), "dd MMMM yyyy, HH:mm", { locale: id });
}

export function getPlainText(html) {
  return (
    html
      // Hilangkan script/style tags dan isinya
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
      // Hilangkan semua tag
      .replace(/<[^>]*>/g, "")
      // Hilangkan multiple whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

export function convertYouTubeUrlToEmbed(url) {
  try {
    const parsedUrl = new URL(url);

    // Format: https://www.youtube.com/watch?v=xxxx
    if (
      parsedUrl.hostname.includes("youtube.com") &&
      parsedUrl.pathname === "/watch"
    ) {
      const videoId = parsedUrl.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Format: https://youtu.be/xxxx
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return null;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export function capitalize(text) {
  return text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getInitials(text) {
  return text
    ? text
        .split(" ")
        .filter(Boolean)
        .map((word) => word[0].toUpperCase())
        .join("")
    : "";
}
