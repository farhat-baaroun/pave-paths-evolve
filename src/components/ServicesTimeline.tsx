import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, FileCheck, UserCheck, ClipboardCheck } from "lucide-react";

export default function ServicesTimeline() {
  const data = [
    {
      title: "01",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-xl">
              <CheckCircle2 size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary dark:text-primary-foreground mb-3">
                Gestion complète de la paie
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Élaboration des bulletins, suivi des absences et congés, calcul des cotisations, éditions des journaux
                et récapitulatifs mensuels.
              </p>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Gestion complète de la paie — bulletins de salaire"
              width="1600"
              height="1200"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-xl">
              <FileCheck size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary dark:text-primary-foreground mb-3">
                Déclarations sociales (DSN, URSSAF, etc.)
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Transmission des DSN et suivi des échanges avec les organismes sociaux pour une conformité totale.
              </p>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/6863311/pexels-photo-6863311.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Transmission dématérialisée des déclarations sociales (DSN)"
              width="1600"
              height="1200"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-xl">
              <UserCheck size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary dark:text-primary-foreground mb-3">
                Assistance RH
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Contrats de travail, entrées et sorties, arrêts maladie, attestations et gestion administrative du
                personnel.
              </p>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Assistance RH — contrats de travail et dossiers administratifs"
              width="1600"
              height="1200"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-xl">
              <ClipboardCheck size={32} className="text-accent" />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary dark:text-primary-foreground mb-3">
                Audit et conformité
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Vérification des pratiques paie et RH, conformité légale et conventionnelle, anticipation des risques de
                redressement.
              </p>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Audit de conformité paie — checklist de contrôle"
              width="1600"
              height="1200"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
