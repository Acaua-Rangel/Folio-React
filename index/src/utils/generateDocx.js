import { Document, Packer, Paragraph, TextRun, ExternalHyperlink } from "docx";
import { saveAs } from "file-saver";
import { resumeData, resumeDataPt } from "../data/resumeData";

const parseBoldHtml = (text, size, color) => {
    if (!text.includes('<strong>')) {
        return [new TextRun({ text, size, color })];
    }
    const parts = text.split(/(<strong>.*?<\/strong>)/g);
    return parts.map(part => {
        if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
            return new TextRun({ text: part.slice(8, -9), bold: true, size, color });
        }
        return new TextRun({ text: part, size, color });
    }).filter(run => run.text !== "");
};

export const generateAndDownloadDocx = (language = 'en') => {
    const data = language === 'pt' ? resumeDataPt : resumeData;
    
    const t = {
        summary: language === 'pt' ? "Resumo Profissional" : "Professional Summary",
        experience: language === 'pt' ? "Experiência Profissional" : "Professional Experience",
        projects: language === 'pt' ? "Projetos" : "Projects",
        education: language === 'pt' ? "Educação" : "Education",
        technologies: language === 'pt' ? "Tecnologias" : "Technologies",
        techs: language === 'pt' ? "Tecnologias" : "Technologies"
    };

    const createContactRuns = () => {
        const runs = [];
        const portfolioLabel = language === 'pt' ? "Portfólio" : "Portfolio";
        
        runs.push(
            new ExternalHyperlink({
                children: [
                    new TextRun({ text: `${portfolioLabel}: acaua.vercel.app`, size: 20, color: "000000", underline: {} }),
                ],
                link: "https://acaua.vercel.app",
            })
        );
        runs.push(new TextRun({ text: " | ", size: 20, color: "000000" }));

        data.contact.forEach((c, index) => {
            runs.push(
                new ExternalHyperlink({
                    children: [
                        new TextRun({ text: `${c.label}: ${c.value}`, size: 20, color: "000000", underline: {} }),
                    ],
                    link: c.link,
                })
            );
            if (index < data.contact.length - 1) {
                runs.push(new TextRun({ text: " | ", size: 20, color: "000000" }));
            }
        });
        return runs;
    };

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    children: [new TextRun({ text: data.about.name, bold: true, size: 36, color: "000000" })]
                }),
                new Paragraph({
                    children: [new TextRun({ text: data.about.role, bold: true, size: 28, color: "000000" })]
                }),
                new Paragraph({
                    children: createContactRuns()
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: t.summary, bold: true, size: 24, color: "000000" })]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: data.about.description, size: 22, color: "000000" }),
                    ]
                }),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: t.experience, bold: true, size: 24, color: "000000" })]
                }),
                ...data.experience.filter(exp => exp.type === 'work').flatMap(exp => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${exp.title} - ${exp.role}`, bold: true, size: 24, color: "000000" }),
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: exp.durationLocality, size: 22, color: "000000" }),
                        ]
                    }),
                    new Paragraph({
                        children: parseBoldHtml(exp.description, 22, "000000")
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${t.techs}: ${exp.technologies}`, size: 20, italics: true, color: "000000" }),
                        ]
                    }),
                    new Paragraph({ text: "" })
                ]),
                new Paragraph({
                    children: [new TextRun({ text: t.projects, bold: true, size: 24, color: "000000" })]
                }),
                ...data.experience.filter(exp => exp.type === 'project').flatMap(exp => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: exp.title, bold: true, size: 24, color: "000000" }),
                            new TextRun({ text: ` | Link: `, size: 20, color: "000000" }),
                            new ExternalHyperlink({
                                children: [
                                    new TextRun({ text: exp.link, size: 20, color: "000000", underline: {} })
                                ],
                                link: exp.link !== "#" ? exp.link : "https://github.com/Acaua-Rangel/"
                            })
                        ]
                    }),
                    new Paragraph({
                        children: parseBoldHtml(exp.description, 22, "000000")
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${t.techs}: ${exp.technologies}`, size: 20, italics: true, color: "000000" }),
                        ]
                    }),
                    new Paragraph({ text: "" })
                ]),
                new Paragraph({
                    children: [new TextRun({ text: t.education, bold: true, size: 24, color: "000000" })]
                }),
                ...data.education.flatMap(edu => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${edu.institution} - ${edu.course}`, bold: true, size: 22, color: "000000" }),
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${edu.duration} | ${edu.locality}`, size: 20, color: "000000" }),
                        ]
                    }),
                    new Paragraph({ text: "" }),
                ]),
                new Paragraph({ text: "" }),
                new Paragraph({
                    children: [new TextRun({ text: t.technologies, bold: true, size: 24, color: "000000" })]
                }),
                ...data.technologies.map(techGroup => 
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${techGroup.category}: `, bold: true, size: 22, color: "000000" }),
                            new TextRun({ text: techGroup.items.join(", "), size: 22, color: "000000" })
                        ]
                    })
                )
            ],
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        const date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        const formattedDate = `${dd}-${mm}-${yyyy}`;
        const suffix = language === 'pt' ? 'BR' : 'EN';
        saveAs(blob, `CV-Acauã-Rangel-Brazil-${formattedDate}-${suffix}.docx`);
    });
};
