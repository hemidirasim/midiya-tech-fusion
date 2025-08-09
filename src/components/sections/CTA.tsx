import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/i18n";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CTA = () => {
  const { t, lang } = useI18n();
  const rawServices = t("services.items");
  const services = Array.isArray(rawServices) ? (rawServices as { title: string }[]).map((s) => s.title) : [];
  const rawBudgets = t("quoteForm.budgets");
  const budgets = Array.isArray(rawBudgets)
    ? (rawBudgets as string[])
    : (lang === "az"
        ? ["< 1,000 ₼", "1,000–5,000 ₼", "5,000–15,000 ₼", "15,000–50,000 ₼", "50,000+ ₼"]
        : ["< $1,000", "$1,000–$5,000", "$5,000–$15,000", "$15,000–$50,000", "$50,000+"]);

  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    services: z.array(z.string()).min(1),
    budget: z.string().min(1),
    message: z.string().min(10),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", services: [], budget: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          services: values.services,
          budget: values.budget,
          message: values.message,
        },
      });

      if (error) {
        throw error;
      }

      toast({ title: t("quoteForm.successTitle"), description: t("quoteForm.successDesc") });
      form.reset();
    } catch (e) {
      console.error('Form submission error:', e);
      toast({ title: t("quoteForm.errorTitle"), description: t("quoteForm.errorDesc") });
    }
  };

  return (
    <section id="elaqe" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="rounded-xl border p-6 md:p-10 bg-gradient-to-r from-[hsl(var(--brand)/0.08)] to-[hsl(var(--brand-2)/0.08)]">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold">{t("cta.title")}</h3>
              <p className="mt-3 text-muted-foreground max-w-2xl">{t("cta.desc")}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <a href="mailto:info@midiya.az?subject=Midiya%20Inquiry">{t("cta.primary")}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#xidmetler">{t("cta.secondary")}</a>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg border p-5 md:p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("quoteForm.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("quoteForm.email")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="name@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("quoteForm.phone")}</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+994 50 000 00 00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                      <FormItem>
                        <FormLabel>{t("quoteForm.services")}</FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {services.map((s) => (
                            <label key={s} className="flex items-center gap-2 rounded-md border p-2 bg-background cursor-pointer">
                              <Checkbox
                                checked={form.getValues("services").includes(s)}
                                onCheckedChange={(checked) => {
                                  const current = form.getValues("services");
                                  if (checked) form.setValue("services", [...current, s]);
                                  else form.setValue("services", current.filter((v) => v !== s));
                                }}
                              />
                              <span className="text-sm">{s}</span>
                            </label>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("quoteForm.budget")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t("quoteForm.budgetPlaceholder") as string} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgets.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("quoteForm.message")}</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Project goals, timeline, stack..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    {t("quoteForm.submit")}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
