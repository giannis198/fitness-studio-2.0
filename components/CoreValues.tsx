import FadeContent from "./ui/FadeContent"
import { Shield, Target, Zap, Users } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Ασφάλεια",
    description: "Προπονήσου με ασφάλεια υπό την καθοδήγηση των ειδικών μας και με τον πιο σύγχρονο εξοπλισμό."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Αποτελέσματα",
    description: "Εγγυημένα αποτελέσματα με εξατομικευμένα προγράμματα προπόνησης προσαρμοσμένα στις δικές σου ανάγκες."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Ενέργεια",
    description: "Ανέβασε την ενέργειά σου στα ύψη σε έναν χώρο που σε εμπνέει να ξεπεράσεις τα όριά σου."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Κοινότητα",
    description: "Γίνε μέλος μιας δυναμικής κοινότητας που στηρίζει την προσπάθειά σου σε κάθε βήμα."
  }
]

const CoreValues = () => {
  return (
    <section className="bg-background py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto">
        <FadeContent blur={true} duration={0.8} threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
              Γιατί να μας <span className="text-primary">Επιλέξετε</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Στο Essential Fitness, δεν προσφέρουμε απλά ένα γυμναστήριο. Προσφέρουμε μια ολοκληρωμένη εμπειρία μεταμόρφωσης.
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeContent 
              key={index} 
              blur={true} 
              duration={0.6} 
              delay={index * 0.1} 
              threshold={0.1}
              className="h-full"
            >
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div className="mb-6 bg-primary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
