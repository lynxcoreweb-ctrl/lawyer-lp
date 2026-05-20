"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  Heart,
  Home,
  Users,
  Scale,
  FileText,
  Shield,
  Award,
  BookOpen,
  Check,
  Info,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

// ============================================
// Hero Section
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-4 md:px-8 lg:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
            <span className="font-serif text-gold text-lg font-bold">山</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium tracking-wider">山田法律事務所</p>
            <p className="text-xs text-primary-foreground/60 tracking-widest">YAMADA LAW OFFICE</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="#problems" className="hover:text-gold transition-colors">お悩みの方へ</Link>
          <Link href="#achievements" className="hover:text-gold transition-colors">解決実績</Link>
          <Link href="#lawyers" className="hover:text-gold transition-colors">弁護士紹介</Link>
          <Link href="#pricing" className="hover:text-gold transition-colors">料金案内</Link>
          <Link href="#faq" className="hover:text-gold transition-colors">よくある質問</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0120-000-000" className="hidden md:flex items-center gap-2 text-sm hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">0120-000-000</span>
          </a>
          <Button asChild className="bg-gold hover:bg-gold/90 text-primary font-medium">
            <Link href="#contact">無料相談</Link>
          </Button>
        </div>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 md:px-8 text-center">
        <p className="text-gold text-sm md:text-base tracking-widest mb-4 md:mb-6">離婚・相続問題の専門家</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8 text-balance">
          <span className="block">人生の岐路に立つ</span>
          <span className="block mt-2">あなたを支える</span>
        </h1>
        <p className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mb-8 md:mb-12 leading-relaxed text-pretty">
          離婚・相続問題でお悩みの方へ。<br className="hidden sm:block" />
          経験豊富な弁護士が、あなたに寄り添い最善の解決策をご提案いたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-8 py-6 text-base">
            <Link href="#contact">
              <Phone className="w-5 h-5 mr-2" />
              無料相談を予約する
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary font-medium px-8 py-6 text-base">
            <a href="https://line.me" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEで相談
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-primary-foreground/10 w-full max-w-3xl">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-serif font-bold text-gold">1,500<span className="text-lg md:text-2xl">+</span></p>
            <p className="text-xs md:text-sm text-primary-foreground/60 mt-1">年間相談件数</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-serif font-bold text-gold">98<span className="text-lg md:text-2xl">%</span></p>
            <p className="text-xs md:text-sm text-primary-foreground/60 mt-1">解決率</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-serif font-bold text-gold">20<span className="text-lg md:text-2xl">年</span></p>
            <p className="text-xs md:text-sm text-primary-foreground/60 mt-1">実績年数</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
      </div>
    </section>
  );
}

// ============================================
// Problems Section
// ============================================
const problems = [
  { icon: Heart, category: "離婚問題", title: "離婚を考えているが、何から始めればいいかわからない", description: "財産分与、親権、養育費など複雑な問題を一つ一つ丁寧に解決します。" },
  { icon: Home, category: "相続問題", title: "相続の手続きが複雑で困っている", description: "遺産分割、相続税対策、遺言書作成まで幅広くサポートいたします。" },
  { icon: Users, category: "離婚問題", title: "配偶者との話し合いが難航している", description: "第三者として冷静に交渉を行い、円満な解決を目指します。" },
  { icon: Scale, category: "相続問題", title: "遺産分割で親族と揉めている", description: "法律に基づいた公正な分割案をご提案し、紛争を解決します。" },
  { icon: FileText, category: "離婚問題", title: "慰謝料や養育費の請求方法がわからない", description: "適正な金額の算出から請求手続きまで完全サポートいたします。" },
  { icon: Shield, category: "相続問題", title: "遺言書の作成について相談したい", description: "法的に有効な遺言書の作成をサポートし、将来のトラブルを防ぎます。" },
];

function ProblemsSection() {
  return (
    <section id="problems" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-accent text-sm tracking-widest mb-3 md:mb-4">PROBLEMS</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            このようなお悩みは<br className="sm:hidden" />ありませんか？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base text-pretty">
            離婚や相続に関する問題は、専門的な知識と経験が必要です。<br className="hidden md:block" />
            一人で抱え込まず、まずはご相談ください。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="group bg-card border border-border p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-accent tracking-wider px-3 py-1 bg-primary/5">{problem.category}</span>
              </div>
              <h3 className="font-medium text-foreground text-base md:text-lg mb-3 leading-relaxed">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Achievements Section
// ============================================
const achievements = [
  { number: "01", category: "離婚問題", title: "財産分与で5,000万円以上を獲得", description: "長年にわたる婚姻期間中に蓄積された財産について、適正な評価と法的根拠に基づく交渉により、依頼者様に有利な条件での解決を実現しました。", result: "財産分与 5,200万円獲得" },
  { number: "02", category: "相続問題", title: "複雑な遺産分割を円満に解決", description: "親族間で長年対立していた遺産分割問題について、中立的な立場から調停を行い、全員が納得する形での解決を導きました。", result: "遺産総額 2億円の分割完了" },
  { number: "03", category: "離婚問題", title: "親権・養育費の確保に成功", description: "お子様の将来を最優先に考え、適切な親権の取得と長期にわたる養育費の確保を実現。面会交流についても双方が納得する条件を取り決めました。", result: "月額養育費 15万円を確保" },
  { number: "04", category: "相続問題", title: "遺言無効の主張を退け相続を守る", description: "他の相続人から遺言の無効を主張されましたが、遺言の有効性を立証し、依頼者様の正当な相続権を守り抜きました。", result: "相続財産 8,000万円を保全" },
];

function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gold text-sm tracking-widest mb-3 md:mb-4">ACHIEVEMENTS</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">解決実績</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base text-pretty">
            これまでに多くの案件を解決に導いてきました。<br className="hidden md:block" />
            実績の一部をご紹介いたします。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="group relative bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-10 hover:bg-primary-foreground/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground/10 group-hover:text-gold/20 transition-colors">{item.number}</span>
                <span className="text-xs font-medium text-gold tracking-wider px-4 py-2 border border-gold/30">{item.category}</span>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl mb-4 leading-relaxed">{item.title}</h3>
              <p className="text-primary-foreground/60 text-sm md:text-base leading-relaxed mb-6">{item.description}</p>
              <div className="pt-6 border-t border-primary-foreground/10">
                <p className="text-gold font-medium text-sm md:text-base">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-primary-foreground/50 text-sm">※ 上記は解決事例の一部です。実際の結果は個々の案件により異なります。</p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Lawyers Section
// ============================================
const lawyers = [
  { name: "山田 太郎", nameEn: "Taro Yamada", position: "代表弁護士", experience: "弁護士歴25年", specialty: "離婚問題・財産分与", message: "人生の大きな決断を迎えている皆様に、法律の専門家として、また一人の人間として寄り添い、最善の解決策を共に見つけてまいります。", credentials: ["東京弁護士会所属", "元家事調停委員", "日本家族法学会会員"] },
  { name: "佐藤 花子", nameEn: "Hanako Sato", position: "パートナー弁護士", experience: "弁護士歴18年", specialty: "相続問題・遺言作成", message: "ご家族の将来を見据えた相続対策から、紛争解決まで、幅広くサポートいたします。まずはお気軽にご相談ください。", credentials: ["東京弁護士会所属", "相続診断士", "日本相続学会会員"] },
  { name: "鈴木 一郎", nameEn: "Ichiro Suzuki", position: "シニア弁護士", experience: "弁護士歴15年", specialty: "親権問題・養育費", message: "お子様の幸せを第一に考えた解決を心がけております。困難な状況でも、諦めずに最良の結果を目指します。", credentials: ["東京弁護士会所属", "子どもの権利委員会委員", "家事事件専門"] },
];

function LawyersSection() {
  return (
    <section id="lawyers" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-accent text-sm tracking-widest mb-3 md:mb-4">LAWYERS</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">弁護士紹介</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base text-pretty">経験豊富な弁護士が、あなたの問題解決をサポートします。</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {lawyers.map((lawyer, index) => (
            <div key={index} className="group bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                  <p className="text-primary-foreground font-serif text-2xl font-bold">{lawyer.name}</p>
                  <p className="text-primary-foreground/60 text-sm">{lawyer.nameEn}</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary tracking-wider px-3 py-1 bg-primary/5">{lawyer.position}</span>
                  <span className="text-xs text-muted-foreground">{lawyer.experience}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-foreground">{lawyer.specialty}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{lawyer.message}</p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {lawyer.credentials.map((cred, i) => (<li key={i}>{cred}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Pricing Section
// ============================================
const pricingPlans = [
  { name: "初回相談", description: "まずはお話をお聞かせください", price: "無料", priceNote: "60分まで", features: ["現状のヒアリング", "法的アドバイス", "今後の見通しのご説明", "費用のお見積り"], highlighted: false },
  { name: "離婚問題", description: "協議離婚から訴訟まで対応", price: "33", priceNote: "万円〜（税込）", features: ["離婚協議の代理交渉", "調停・訴訟の代理", "財産分与の交渉", "親権・養育費の取り決め", "慰謝料請求"], highlighted: true },
  { name: "相続問題", description: "相続手続きをトータルサポート", price: "22", priceNote: "万円〜（税込）", features: ["遺産分割協議の代理", "遺言書作成サポート", "相続放棄手続き", "遺留分請求", "相続調査"], highlighted: false },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-accent text-sm tracking-widest mb-3 md:mb-4">PRICING</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">料金案内</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base text-pretty">
            明確な料金体系で、安心してご依頼いただけます。<br className="hidden md:block" />
            詳細は初回相談時にご説明いたします。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-card border p-6 md:p-8 ${plan.highlighted ? "border-primary shadow-xl scale-[1.02] md:scale-105" : "border-border"}`}>
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-2 tracking-wider">人気</span>
                </div>
              )}
              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <div className="text-center mb-6 md:mb-8">
                <div className="flex items-end justify-center gap-1">
                  {plan.price === "無料" ? (
                    <span className="text-4xl md:text-5xl font-serif font-bold text-primary">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl md:text-5xl font-serif font-bold text-primary">{plan.price}</span>
                      <span className="text-lg text-muted-foreground mb-1">{plan.priceNote}</span>
                    </>
                  )}
                </div>
                {plan.price === "無料" && <p className="text-muted-foreground text-sm mt-2">{plan.priceNote}</p>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`w-full ${plan.highlighted ? "bg-primary hover:bg-accent text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"}`}>
                <Link href="#contact">相談を予約する</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="bg-card border border-border p-6 md:p-8 flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-2">料金について</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                上記は基本料金の目安です。案件の複雑さや期間により異なる場合がございます。
                詳細な費用は初回相談時にお見積りいたします。着手金・報酬金の分割払いにも対応しておりますので、お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ Section
// ============================================
const faqs = [
  { category: "ご相談について", questions: [
    { q: "初回相談は本当に無料ですか？", a: "はい、初回60分までの相談は完全無料です。現在のお悩みをお聞かせいただき、法的なアドバイスや今後の見通しをご説明いたします。ご依頼いただくかどうかは、相談後にご検討いただいて構いません。" },
    { q: "相談内容が外部に漏れることはありませんか？", a: "弁護士には守秘義務がございますので、ご相談内容が外部に漏れることは一切ありません。安心してお話しください。" },
    { q: "相談はどのような形式で行われますか？", a: "事務所での対面相談のほか、オンライン相談（Zoom等）にも対応しております。お客様のご都合に合わせてお選びいただけます。" },
  ]},
  { category: "離婚問題について", questions: [
    { q: "離婚を考えていますが、何から始めればよいですか？", a: "まずは現在の状況を整理することが大切です。財産状況、お子様の有無、離婚の理由などをお聞かせいただき、最適な進め方をアドバイスいたします。" },
    { q: "配偶者が離婚に応じてくれない場合はどうなりますか？", a: "協議が難航する場合は、調停・裁判という手続きがございます。法律で定められた離婚事由に該当すれば、最終的には裁判で離婚が認められます。" },
  ]},
  { category: "相続問題について", questions: [
    { q: "遺言書がない場合、相続はどうなりますか？", a: "遺言書がない場合は、法定相続分に従って遺産分割を行います。相続人全員で話し合い、遺産分割協議書を作成する必要があります。" },
    { q: "相続放棄はいつまでにすればよいですか？", a: "原則として、相続の開始を知った日から3ヶ月以内に家庭裁判所に申述する必要があります。期限が迫っている場合は、早急にご相談ください。" },
  ]},
  { category: "費用について", questions: [
    { q: "費用の支払いは分割できますか？", a: "はい、着手金・報酬金ともに分割払いに対応しております。お支払い方法については、初回相談時にご相談ください。" },
    { q: "着手金を払ったら途中で解約できませんか？", a: "いつでも解約は可能です。ただし、着手金は原則として返金されませんので、ご了承ください。詳細は委任契約書でご確認いただけます。" },
  ]},
];

function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleItem = (id: string) => setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-accent text-sm tracking-widest mb-3 md:mb-4">FAQ</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">よくある質問</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base text-pretty">
            お客様からよくいただくご質問をまとめました。<br className="hidden md:block" />
            その他のご質問はお気軽にお問い合わせください。
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-medium text-primary text-lg mb-4 pb-2 border-b border-primary/20">{category.category}</h3>
              <div className="space-y-2">
                {category.questions.map((item, itemIndex) => {
                  const itemId = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems.includes(itemId);
                  return (
                    <div key={itemIndex} className="border border-border bg-card">
                      <button onClick={() => toggleItem(itemId)} className="w-full flex items-start justify-between gap-4 p-4 md:p-6 text-left hover:bg-muted/50 transition-colors">
                        <span className="font-medium text-foreground text-sm md:text-base">{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                        <div className="px-4 md:px-6 pb-4 md:pb-6">
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// Contact Section
// ============================================
function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", type: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", type: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gold text-sm tracking-widest mb-3 md:mb-4">CONTACT</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">お問い合わせ</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm md:text-base text-pretty">
            初回相談は無料です。まずはお気軽にご連絡ください。<br className="hidden md:block" />
            24時間以内にご返信いたします。
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-6">お問い合わせ方法</h3>
              <div className="space-y-6">
                <a href="tel:0120-000-000" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors"><Phone className="w-5 h-5 text-gold" /></div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">お電話でのお問い合わせ</p>
                    <p className="text-xl font-bold group-hover:text-gold transition-colors">0120-000-000</p>
                    <p className="text-primary-foreground/50 text-xs mt-1">通話料無料</p>
                  </div>
                </a>
                <a href="mailto:info@yamada-law.jp" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors"><Mail className="w-5 h-5 text-gold" /></div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">メールでのお問い合わせ</p>
                    <p className="text-lg font-medium group-hover:text-gold transition-colors">info@yamada-law.jp</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-gold" /></div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">営業時間</p>
                    <p className="text-lg font-medium">平日 9:00 - 18:00</p>
                    <p className="text-primary-foreground/50 text-xs mt-1">土日祝は予約制</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-gold" /></div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">所在地</p>
                    <p className="text-lg font-medium">〒100-0001</p>
                    <p className="text-primary-foreground/70 text-sm">東京都千代田区丸の内1-1-1</p>
                    <p className="text-primary-foreground/70 text-sm">丸の内ビルディング20F</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#06C755] p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
                <div>
                  <p className="font-bold text-lg text-white">LINE公式アカウント</p>
                  <p className="text-white/80 text-sm">24時間いつでもご相談いただけます</p>
                </div>
              </div>
              <Button asChild className="w-full bg-white text-[#06C755] hover:bg-white/90 font-bold">
                <a href="https://line.me" target="_blank" rel="noopener noreferrer">友だち追加して相談する</a>
              </Button>
            </div>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-10">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-6">無料相談フォーム</h3>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-gold mb-4" />
                <p className="text-xl font-bold mb-2">送信が完了しました</p>
                <p className="text-primary-foreground/70 text-sm">24時間以内にご連絡いたします</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">お名前 <span className="text-gold">*</span></label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors" placeholder="山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">メールアドレス <span className="text-gold">*</span></label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">電話番号</label>
                  <input type="tel" value={formState.phone} onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors" placeholder="090-1234-5678" />
                </div>
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">相談内容 <span className="text-gold">*</span></label>
                  <select required value={formState.type} onChange={(e) => setFormState((prev) => ({ ...prev, type: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/20 px-4 py-3 text-primary-foreground focus:border-gold focus:outline-none transition-colors">
                    <option value="" className="bg-primary">選択してください</option>
                    <option value="divorce" className="bg-primary">離婚問題</option>
                    <option value="inheritance" className="bg-primary">相続問題</option>
                    <option value="other" className="bg-primary">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-primary-foreground/70 mb-2">ご相談内容の詳細 <span className="text-gold">*</span></label>
                  <textarea required rows={4} value={formState.message} onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-gold focus:outline-none transition-colors resize-none" placeholder="お悩みの内容をご記入ください" />
                </div>
                <p className="text-primary-foreground/50 text-xs">ご入力いただいた個人情報は、お問い合わせへの対応以外の目的には使用いたしません。</p>
                <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-primary font-bold py-6 text-base">
                  <Send className="w-5 h-5 mr-2" />
                  無料相談を申し込む
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Footer
// ============================================
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
                <span className="font-serif text-gold text-lg font-bold">山</span>
              </div>
              <div>
                <p className="text-sm font-medium tracking-wider text-background">山田法律事務所</p>
                <p className="text-xs text-background/60 tracking-widest">YAMADA LAW OFFICE</p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-md">
              離婚問題・相続問題に強い弁護士事務所。<br />
              20年以上の実績と経験で、あなたの問題解決をサポートします。
            </p>
            <div className="mt-4">
              <p className="text-background/60 text-sm">〒100-0001 東京都千代田区丸の内1-1-1 丸の内ビルディング20F</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-background mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link href="#problems" className="hover:text-gold transition-colors">お悩みの方へ</Link></li>
              <li><Link href="#achievements" className="hover:text-gold transition-colors">解決実績</Link></li>
              <li><Link href="#lawyers" className="hover:text-gold transition-colors">弁護士紹介</Link></li>
              <li><Link href="#pricing" className="hover:text-gold transition-colors">料金案内</Link></li>
              <li><Link href="#faq" className="hover:text-gold transition-colors">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-background mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="tel:0120-000-000" className="hover:text-gold transition-colors">0120-000-000（通話料無料）</a></li>
              <li><a href="mailto:info@yamada-law.jp" className="hover:text-gold transition-colors">info@yamada-law.jp</a></li>
              <li>営業時間: 平日 9:00 - 18:00</li>
              <li><a href="https://line.me" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LINE公式アカウント</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">&copy; {new Date().getFullYear()} 山田法律事務所 All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-xs text-background/40">
            <Link href="#" className="hover:text-background/60 transition-colors">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-background/60 transition-colors">利用規約</Link>
            <Link href="#" className="hover:text-background/60 transition-colors">特定商取引法に基づく表記</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// Floating CTA
// ============================================
function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="grid grid-cols-2">
        <a href="tel:0120-000-000" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-medium">
          <Phone className="w-5 h-5" />
          <span>電話相談</span>
        </a>
        <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#06C755] text-white py-4 font-medium">
          <MessageCircle className="w-5 h-5" />
          <span>LINE相談</span>
        </a>
      </div>
    </div>
  );
}

// ============================================
// Main Page
// ============================================
export default function LawFirmLandingPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemsSection />
      <AchievementsSection />
      <LawyersSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
