# Push project demos to GitHub

`gh` CLI was not available in the build environment. Run these steps locally (Git Bash or PowerShell).

Create three empty repos on GitHub under **ParvezSK3** (no README), then:

```powershell
cd c:\Users\shaik\Desktop\Salesforce_Portfolio\repos\salesforce-case-triage-demo
git init
git add .
git commit -m "Add case triage interactive demo"
git branch -M main
git remote add origin https://github.com/ParvezSK3/salesforce-case-triage-demo.git
git push -u origin main
```

Repeat for:

- `salesforce-support-agent-demo` → `https://github.com/ParvezSK3/salesforce-support-agent-demo.git`
- `salesforce-knowledge-bot-demo` → `https://github.com/ParvezSK3/salesforce-knowledge-bot-demo.git`

After deploying the portfolio, update the **View live demo** badge URLs in each README to your real Vercel domain.

The full demo source also lives in the portfolio at:

- `src/components/demos/CaseTriageDemo.tsx`
- `src/components/demos/SupportAgentDemo.tsx`
- `src/components/demos/KnowledgeBotDemo.tsx`
