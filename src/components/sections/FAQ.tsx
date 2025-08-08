import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18n/i18n";

const FAQ = () => {
  const { t } = useI18n();
  const faqs = t("faq.items") as { q: string; a: string }[];
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto">
        <header className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("faq.header")}</h2>
          <p className="mt-3 text-muted-foreground">{t("faq.sub")}</p>
        </header>
        <Accordion type="single" collapsible className="w-full">
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
