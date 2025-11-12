import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, FileCheck, UserCheck, ClipboardCheck } from "lucide-react";

export default function ServicesTimeline() {
  const data = [
    {
      title: <CheckCircle2 size={24} className="text-accent" />,
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4">
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
        </div>
      ),
    },
    {
      title: <FileCheck size={24} className="text-accent" />,
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4">
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
        </div>
      ),
    },
    {
      title: <UserCheck size={24} className="text-accent" />,
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4">
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
        </div>
      ),
    },
    {
      title: <ClipboardCheck size={24} className="text-accent" />,
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4">
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
