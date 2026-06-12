import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.integrations.Core.SendEmail({
      to: 'info@ekos-mimon.cz',
      subject: `Poptávka z webu — ${formData.name} (${formData.company || 'bez firmy'})`,
      body: `
Nová poptávka z webu EKOS Mimoň:

Jméno: ${formData.name}
Firma: ${formData.company || '—'}
E-mail: ${formData.email}
Telefon: ${formData.phone || '—'}
Oblast zájmu: ${formData.service || '—'}

Specifikace projektu:
${formData.message}
      `.trim(),
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Poptávka byla odeslána');
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-inter font-bold text-xl text-foreground mb-2">Děkujeme za poptávku</h3>
        <p className="text-muted-foreground text-sm">Ozveme se vám do 48 hodin s nabídkou.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Jméno a příjmení *
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            className="bg-background border-border h-12 font-inter"
            placeholder="Jan Novák"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Firma
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="bg-background border-border h-12 font-inter"
            placeholder="Název společnosti"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            E-mail *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="bg-background border-border h-12 font-inter"
            placeholder="jan@firma.cz"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Telefon
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="bg-background border-border h-12 font-inter"
            placeholder="+420 ..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Oblast zájmu
        </Label>
        <Select value={formData.service} onValueChange={(v) => handleChange('service', v)}>
          <SelectTrigger className="bg-background border-border h-12 font-inter">
            <SelectValue placeholder="Vyberte oblast" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="svarovane-konstrukce">Svařované konstrukce</SelectItem>
            <SelectItem value="tlakove-nadoby">Tlakové nádoby</SelectItem>
            <SelectItem value="vzduchotechnika">Vzduchotechnika</SelectItem>
            <SelectItem value="technologie-cov">Technologie ČOV</SelectItem>
            <SelectItem value="opravy-udrzba">Opravy a údržba</SelectItem>
            <SelectItem value="zakazkova-kovovyroba">Zakázková kovovýroba</SelectItem>
            <SelectItem value="jine">Jiné</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Specifikace projektu *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          rows={5}
          className="bg-background border-border font-inter resize-none"
          placeholder="Popište svůj projekt — rozsah, požadavky, termíny..."
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gdpr"
          checked={gdprConsent}
          onChange={(e) => setGdprConsent(e.target.checked)}
          required
          className="mt-1 w-4 h-4 flex-shrink-0 accent-primary cursor-pointer"
        />
        <label htmlFor="gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
          Odesláním formuláře souhlasím se zpracováním osobních údajů dle{' '}
          <Link to="/ochrana-osobnich-udaju" className="text-primary hover:underline">
            zásad ochrany osobních údajů
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !gdprConsent}
        className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Odesílání...
          </>
        ) : (
          <>
            Odeslat poptávku
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
