import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Niyə Midiya?",
    a: "A‑dan Z‑yə tam spektr: dizayn, inkişaf, istehsal və dəstək. Software və hardware birlikdə, yüksək texniki keyfiyyətlə.",
  },
  {
    q: "İcra müddəti nə qədərdir?",
    a: "Layihənin ölçüsündən asılıdır. MVP üçün 2‑6 həftə, kompleks sistemlər üçün mərhələli planlama tətbiq edirik.",
  },
  {
    q: "AI həllləri necə inteqrasiya olunur?",
    a: "Mövcud infrastrukturunuza uyğun model seçimi, API/edge inteqrasiyası və etik/özəl məlumatların qorunması ilə.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Tez‑tez verilən suallar</h2>
          <p className="mt-3 text-muted-foreground">Əgər sualınız siyahıda yoxdursa, bizə yazın: info@midiya.az</p>
        </header>
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
