(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_analysis_page_tsx_92e66a1b._.js", {

"[project]/src/app/analysis/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Analysis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Analysis() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Kişisel Bilgiler
        firstName: '',
        lastName: '',
        tcNo: '',
        birthDate: '',
        // Fiziksel Bilgiler
        height: '',
        weight: '',
        bloodType: '',
        gender: '',
        // Sağlık Bilgileri
        chronicDiseases: [],
        allergies: [],
        medications: '',
        recentIllnesses: ''
    });
    const [isFormValid, setIsFormValid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [otherChronicText, setOtherChronicText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [otherAllergyText, setOtherAllergyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileSuccess, setFileSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analysis.useEffect": ()=>{
            validateForm();
        }
    }["Analysis.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analysis.useEffect": ()=>{
            const { medications, recentIllnesses, ...requiredFields } = formData;
            validateForm();
        }
    }["Analysis.useEffect"], [
        formData.firstName,
        formData.lastName,
        formData.tcNo,
        formData.birthDate,
        formData.height,
        formData.weight,
        formData.bloodType,
        formData.gender,
        formData.chronicDiseases,
        formData.allergies,
        selectedFile
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'medications' || name === 'recentIllnesses') {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
            validateForm();
        }
    };
    const handleCheckboxChange = (e)=>{
        const { name, value, checked } = e.target;
        if (value === 'yok') {
            setFormData((prev)=>({
                    ...prev,
                    [name]: checked ? [
                        'yok'
                    ] : []
                }));
        } else {
            setFormData((prev)=>{
                const currentValues = prev[name];
                const withoutNone = currentValues.filter((item)=>item !== 'yok');
                if (checked) {
                    return {
                        ...prev,
                        [name]: [
                            ...withoutNone,
                            value
                        ]
                    };
                } else {
                    return {
                        ...prev,
                        [name]: withoutNone.filter((item)=>item !== value)
                    };
                }
            });
        }
        validateForm();
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            setFileSuccess(true);
        } else {
            setSelectedFile(null);
            setFileSuccess(false);
        }
        validateForm();
    };
    const validateForm = ()=>{
        // Kişisel bilgilerin kontrolü
        const isPersonalInfoValid = formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.tcNo.trim() !== '' && formData.tcNo.length === 11 && formData.birthDate !== '';
        // Fiziksel bilgilerin kontrolü
        const isPhysicalInfoValid = formData.height !== '' && formData.weight !== '' && formData.bloodType !== '' && formData.gender !== '';
        // Sağlık bilgilerinin kontrolü (sadece kronik hastalıklar ve alerjiler)
        const isHealthInfoValid = (formData.chronicDiseases.length > 0 || formData.chronicDiseases.includes('yok')) && (formData.allergies.length > 0 || formData.allergies.includes('yok'));
        // Dosya kontrolü
        const isFileValid = selectedFile !== null;
        // Sadece zorunlu alanların kontrolü
        const isValid = isPersonalInfoValid && isPhysicalInfoValid && isHealthInfoValid && isFileValid;
        // Debug için konsola yazdır
        console.log('Form Validation:', {
            isPersonalInfoValid,
            isPhysicalInfoValid,
            isHealthInfoValid,
            isFileValid,
            isValid
        });
        setIsFormValid(isValid);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Form verilerini kontrol et
        if (!isFormValid) {
            return;
        }
        // Form verilerini URL parametrelerine dönüştür
        const params = new URLSearchParams({
            firstName: formData.firstName,
            lastName: formData.lastName,
            tcNo: formData.tcNo,
            birthDate: formData.birthDate,
            height: formData.height,
            weight: formData.weight,
            bloodType: formData.bloodType,
            gender: formData.gender,
            chronicDiseases: formData.chronicDiseases.join(','),
            allergies: formData.allergies.join(','),
            medications: formData.medications,
            recentIllnesses: formData.recentIllnesses
        });
        // Yeni sayfaya yönlendir
        router.push(`/analysis/result?${params.toString()}`);
    };
    const referenceRanges = [
        {
            name: 'WBC (Lökosit)',
            range: '4.5-11.0 10^3/µL',
            description: 'Enfeksiyon ve bağışıklık durumu göstergesi'
        },
        {
            name: 'RBC (Eritrosit)',
            range: '4.2-6.1 10^6/µL',
            description: 'Oksijen taşıma kapasitesi göstergesi'
        },
        {
            name: 'HGB (Hemoglobin)',
            range: '12.0-17.5 g/dL',
            description: 'Kansızlık durumu göstergesi'
        },
        {
            name: 'HCT (Hematokrit)',
            range: '36-50%',
            description: 'Kan yoğunluğu göstergesi'
        },
        {
            name: 'MCV',
            range: '80-100 fL',
            description: 'Kırmızı kan hücresi boyutu'
        },
        {
            name: 'PLT (Trombosit)',
            range: '150-450 10^3/µL',
            description: 'Pıhtılaşma faktörü'
        }
    ];
    const diseases = [
        {
            category: 'Anemi (Kansızlık)',
            conditions: [
                {
                    name: 'Demir Eksikliği Anemisi',
                    indicators: [
                        'Düşük HGB',
                        'Düşük MCV'
                    ]
                },
                {
                    name: 'B12 Eksikliği Anemisi',
                    indicators: [
                        'Düşük HGB',
                        'Yüksek MCV'
                    ]
                },
                {
                    name: 'Kronik Hastalık Anemisi',
                    indicators: [
                        'Düşük HGB',
                        'Normal MCV'
                    ]
                }
            ]
        },
        {
            category: 'Enfeksiyonlar',
            conditions: [
                {
                    name: 'Bakteriyel Enfeksiyon',
                    indicators: [
                        'Yüksek WBC',
                        'Yüksek Nötrofil'
                    ]
                },
                {
                    name: 'Viral Enfeksiyon',
                    indicators: [
                        'Normal/Düşük WBC',
                        'Yüksek Lenfosit'
                    ]
                }
            ]
        },
        {
            category: 'Kanama Bozuklukları',
            conditions: [
                {
                    name: 'Trombositopeni',
                    indicators: [
                        'Düşük PLT'
                    ]
                },
                {
                    name: 'Trombositoz',
                    indicators: [
                        'Yüksek PLT'
                    ]
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modern-background"
            }, void 0, false, {
                fileName: "[project]/src/app/analysis/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "analysis-page",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container position-relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "back-button-blue",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-arrow-left me-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/analysis/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    "Ana Sayfa"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analysis/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-md-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "analysis-form-container",
                                        "data-aos": "fade-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "section-title text-center mb-4",
                                                children: "Kan Tahlili Analizi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "analysis-form",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "section-subtitle",
                                                                children: "Kişisel Bilgiler"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "firstName",
                                                                                className: "form-label",
                                                                                children: "Ad"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 218,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                id: "firstName",
                                                                                name: "firstName",
                                                                                value: formData.firstName,
                                                                                onChange: handleInputChange,
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "lastName",
                                                                                className: "form-label",
                                                                                children: "Soyad"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 230,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                id: "lastName",
                                                                                name: "lastName",
                                                                                value: formData.lastName,
                                                                                onChange: handleInputChange,
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "tcNo",
                                                                                className: "form-label",
                                                                                children: "TC Kimlik No"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 244,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                id: "tcNo",
                                                                                name: "tcNo",
                                                                                value: formData.tcNo,
                                                                                onChange: (e)=>{
                                                                                    // Sadece rakam girilsin
                                                                                    const value = e.target.value.replace(/[^0-9]/g, '');
                                                                                    if (value.length <= 11) {
                                                                                        setFormData((prev)=>({
                                                                                                ...prev,
                                                                                                tcNo: value
                                                                                            }));
                                                                                        validateForm();
                                                                                    }
                                                                                },
                                                                                required: true,
                                                                                inputMode: "numeric",
                                                                                pattern: "[0-9]*",
                                                                                maxLength: 11
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 245,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "birthDate",
                                                                                className: "form-label",
                                                                                children: "Doğum Tarihi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "date",
                                                                                className: "form-control",
                                                                                id: "birthDate",
                                                                                name: "birthDate",
                                                                                value: formData.birthDate,
                                                                                onChange: handleInputChange,
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 267,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "section-subtitle",
                                                                children: "Fiziksel Bilgiler"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "height",
                                                                                className: "form-label",
                                                                                children: "Boy (cm)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 285,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: "form-control",
                                                                                id: "height",
                                                                                name: "height",
                                                                                value: formData.height,
                                                                                onChange: handleInputChange,
                                                                                required: true,
                                                                                min: "100",
                                                                                max: "250"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 286,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "weight",
                                                                                className: "form-label",
                                                                                children: "Kilo (kg)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: "form-control",
                                                                                id: "weight",
                                                                                name: "weight",
                                                                                value: formData.weight,
                                                                                onChange: handleInputChange,
                                                                                required: true,
                                                                                min: "30",
                                                                                max: "300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "bloodType",
                                                                                className: "form-label",
                                                                                children: "Kan Grubu"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                className: "form-select",
                                                                                id: "bloodType",
                                                                                name: "bloodType",
                                                                                value: formData.bloodType,
                                                                                onChange: handleInputChange,
                                                                                required: true,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "Seçiniz"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 324,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "A+",
                                                                                        children: "A Rh+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 325,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "A-",
                                                                                        children: "A Rh-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 326,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "B+",
                                                                                        children: "B Rh+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 327,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "B-",
                                                                                        children: "B Rh-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 328,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "AB+",
                                                                                        children: "AB Rh+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 329,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "AB-",
                                                                                        children: "AB Rh-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 330,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "0+",
                                                                                        children: "0 Rh+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 331,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "0-",
                                                                                        children: "0 Rh-"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 332,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 316,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-md-6 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "gender",
                                                                                className: "form-label",
                                                                                children: "Cinsiyet"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 336,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                className: "form-select",
                                                                                id: "gender",
                                                                                name: "gender",
                                                                                value: formData.gender,
                                                                                onChange: handleInputChange,
                                                                                required: true,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "",
                                                                                        children: "Seçiniz"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 345,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "male",
                                                                                        children: "Erkek"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                        value: "female",
                                                                                        children: "Kadın"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 347,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 337,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 335,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "section-subtitle",
                                                                children: "Sağlık Bilgileri"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "health-info-section",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "health-info-box",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "subsection-title",
                                                                                children: "Kronik Hastalıklar"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 360,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "checkbox-group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "diabetes",
                                                                                                name: "chronicDiseases",
                                                                                                value: "diyabet",
                                                                                                checked: formData.chronicDiseases.includes('diyabet'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 363,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "diabetes",
                                                                                                children: "Diyabet"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 372,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 362,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "hypertension",
                                                                                                name: "chronicDiseases",
                                                                                                value: "hipertansiyon",
                                                                                                checked: formData.chronicDiseases.includes('hipertansiyon'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 375,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "hypertension",
                                                                                                children: "Hipertansiyon"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 384,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 374,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "heartDisease",
                                                                                                name: "chronicDiseases",
                                                                                                value: "kalp-hastaligi",
                                                                                                checked: formData.chronicDiseases.includes('kalp-hastaligi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 387,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "heartDisease",
                                                                                                children: "Kalp Hastalığı"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 396,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 386,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "asthma",
                                                                                                name: "chronicDiseases",
                                                                                                value: "astim",
                                                                                                checked: formData.chronicDiseases.includes('astim'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 399,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "asthma",
                                                                                                children: "Astım"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 408,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 398,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "koah",
                                                                                                name: "chronicDiseases",
                                                                                                value: "koah",
                                                                                                checked: formData.chronicDiseases.includes('koah'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 411,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "koah",
                                                                                                children: "KOAH"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 420,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 410,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "thyroid",
                                                                                                name: "chronicDiseases",
                                                                                                value: "tiroid",
                                                                                                checked: formData.chronicDiseases.includes('tiroid'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 423,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "thyroid",
                                                                                                children: "Tiroid"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 432,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 422,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "arthritis",
                                                                                                name: "chronicDiseases",
                                                                                                value: "artrit",
                                                                                                checked: formData.chronicDiseases.includes('artrit'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 435,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "arthritis",
                                                                                                children: "Artrit"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 444,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 434,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "migraine",
                                                                                                name: "chronicDiseases",
                                                                                                value: "migren",
                                                                                                checked: formData.chronicDiseases.includes('migren'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 447,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "migraine",
                                                                                                children: "Migren"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 456,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 446,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "noChronic",
                                                                                                name: "chronicDiseases",
                                                                                                value: "yok",
                                                                                                checked: formData.chronicDiseases.includes('yok'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 459,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "noChronic",
                                                                                                children: "Yok"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 468,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 458,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "otherChronic",
                                                                                                name: "chronicDiseases",
                                                                                                value: "diger",
                                                                                                checked: formData.chronicDiseases.includes('diger'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 471,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "otherChronic",
                                                                                                children: "Diğer"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 480,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 470,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    formData.chronicDiseases.includes('diger') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        className: "form-control mt-2",
                                                                                        placeholder: "Lütfen belirtiniz",
                                                                                        value: otherChronicText,
                                                                                        onChange: (e)=>setOtherChronicText(e.target.value),
                                                                                        style: {
                                                                                            fontSize: '1rem'
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 484,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 361,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "health-info-box",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "subsection-title",
                                                                                children: "Alerjiler"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 498,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "checkbox-group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "foodAllergy",
                                                                                                name: "allergies",
                                                                                                value: "gida-alerjisi",
                                                                                                checked: formData.allergies.includes('gida-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 501,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "foodAllergy",
                                                                                                children: "Gıda Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 510,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 500,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "medicationAllergy",
                                                                                                name: "allergies",
                                                                                                value: "ilac-alerjisi",
                                                                                                checked: formData.allergies.includes('ilac-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 513,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "medicationAllergy",
                                                                                                children: "İlaç Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 522,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 512,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "pollenAllergy",
                                                                                                name: "allergies",
                                                                                                value: "polen-alerjisi",
                                                                                                checked: formData.allergies.includes('polen-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 525,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "pollenAllergy",
                                                                                                children: "Polen Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 534,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 524,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "dustAllergy",
                                                                                                name: "allergies",
                                                                                                value: "toz-alerjisi",
                                                                                                checked: formData.allergies.includes('toz-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 537,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "dustAllergy",
                                                                                                children: "Toz Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 546,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 536,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "animalAllergy",
                                                                                                name: "allergies",
                                                                                                value: "hayvan-alerjisi",
                                                                                                checked: formData.allergies.includes('hayvan-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 549,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "animalAllergy",
                                                                                                children: "Hayvan Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 558,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 548,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "moldAllergy",
                                                                                                name: "allergies",
                                                                                                value: "kuf-alerjisi",
                                                                                                checked: formData.allergies.includes('kuf-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 561,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "moldAllergy",
                                                                                                children: "Küf Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 570,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 560,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "latexAllergy",
                                                                                                name: "allergies",
                                                                                                value: "lateks-alerjisi",
                                                                                                checked: formData.allergies.includes('lateks-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 573,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "latexAllergy",
                                                                                                children: "Lateks Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 582,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 572,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "insectAllergy",
                                                                                                name: "allergies",
                                                                                                value: "bocek-alerjisi",
                                                                                                checked: formData.allergies.includes('bocek-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 585,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "insectAllergy",
                                                                                                children: "Böcek Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 594,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 584,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "metalAllergy",
                                                                                                name: "allergies",
                                                                                                value: "metal-alerjisi",
                                                                                                checked: formData.allergies.includes('metal-alerjisi'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 597,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "metalAllergy",
                                                                                                children: "Metal Alerjisi"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 606,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 596,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "noAllergy",
                                                                                                name: "allergies",
                                                                                                value: "yok",
                                                                                                checked: formData.allergies.includes('yok'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 609,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "noAllergy",
                                                                                                children: "Yok"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 618,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 608,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "form-check",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "checkbox",
                                                                                                className: "form-check-input",
                                                                                                id: "otherAllergy",
                                                                                                name: "allergies",
                                                                                                value: "diger",
                                                                                                checked: formData.allergies.includes('diger'),
                                                                                                onChange: handleCheckboxChange
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 621,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-check-label",
                                                                                                htmlFor: "otherAllergy",
                                                                                                children: "Diğer"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 630,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 620,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    formData.allergies.includes('diger') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "text",
                                                                                        className: "form-control mt-2",
                                                                                        placeholder: "Lütfen belirtiniz",
                                                                                        value: otherAllergyText,
                                                                                        onChange: (e)=>setOtherAllergyText(e.target.value),
                                                                                        style: {
                                                                                            fontSize: '1rem'
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 634,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                lineNumber: 499,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "health-info-section-single",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "subsection-title",
                                                                        children: "Düzenli Kullanılan İlaçlar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 651,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "health-info-box",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            className: "form-control",
                                                                            id: "medications",
                                                                            name: "medications",
                                                                            value: formData.medications,
                                                                            onChange: handleInputChange,
                                                                            placeholder: "Varsa yazınız",
                                                                            rows: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analysis/page.tsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 652,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "subsection-title",
                                                                        children: "Son 6 Ayda Geçirilen Önemli Hastalıklar"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "health-info-box",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            className: "form-control",
                                                                            id: "recentIllnesses",
                                                                            name: "recentIllnesses",
                                                                            value: formData.recentIllnesses,
                                                                            onChange: handleInputChange,
                                                                            placeholder: "Varsa yazınız",
                                                                            rows: 3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analysis/page.tsx",
                                                                            lineNumber: 667,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 666,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blood-test-section",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "section-subtitle",
                                                                children: "Kan Tahlili Sonuçları"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "file-upload-container excel-upload-modern",
                                                                onClick: ()=>{
                                                                    const input = document.getElementById('bloodTestResults');
                                                                    if (input) input.click();
                                                                },
                                                                style: {
                                                                    cursor: 'pointer'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "excel-icon-circle",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "48",
                                                                            height: "48",
                                                                            viewBox: "0 0 48 48",
                                                                            fill: "none",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                                        id: "excelGradient",
                                                                                        x1: "0",
                                                                                        y1: "0",
                                                                                        x2: "48",
                                                                                        y2: "48",
                                                                                        gradientUnits: "userSpaceOnUse",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                                stopColor: "#4CAF50"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 691,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                                offset: "1",
                                                                                                stopColor: "#2196F3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                                                lineNumber: 692,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                                        lineNumber: 690,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analysis/page.tsx",
                                                                                    lineNumber: 689,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    cx: "24",
                                                                                    cy: "24",
                                                                                    r: "22",
                                                                                    fill: "url(#excelGradient)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analysis/page.tsx",
                                                                                    lineNumber: 695,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "14",
                                                                                    y: "14",
                                                                                    width: "20",
                                                                                    height: "20",
                                                                                    rx: "4",
                                                                                    fill: "#fff"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analysis/page.tsx",
                                                                                    lineNumber: 696,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                                    x: "24",
                                                                                    y: "30",
                                                                                    textAnchor: "middle",
                                                                                    fontSize: "16",
                                                                                    fontWeight: "bold",
                                                                                    fill: "#4CAF50",
                                                                                    children: "X"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analysis/page.tsx",
                                                                                    lineNumber: 697,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/analysis/page.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "excel-upload-title",
                                                                        children: "Excel Dosyanızı Seçin veya Sürükleyin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "excel-upload-desc",
                                                                        children: "Sadece .xlsx veya .xls formatında dosya yükleyebilirsiniz"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        className: "form-control",
                                                                        id: "bloodTestResults",
                                                                        accept: ".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",
                                                                        onChange: handleFileChange,
                                                                        required: true,
                                                                        style: {
                                                                            display: 'none'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 21
                                                    }, this),
                                                    fileSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: '#219653',
                                                            background: '#eafaf1',
                                                            borderRadius: '8px',
                                                            padding: '10px 0',
                                                            marginTop: '10px',
                                                            fontWeight: 600,
                                                            fontSize: '1.05rem',
                                                            textAlign: 'center'
                                                        },
                                                        children: "Dosya başarıyla yüklendi."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center mt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: `btn-analyze ${!isFormValid ? 'disabled' : ''}`,
                                                            disabled: !isFormValid,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-flask me-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/analysis/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 25
                                                                }, this),
                                                                isFormValid ? 'Analize Başla' : 'Analize Başla'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/analysis/page.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analysis/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analysis/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analysis/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analysis/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/analysis/page.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analysis/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/analysis/page.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/analysis/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/analysis/page.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s(Analysis, "xWOlBc0yP+of6LEti+VlqFzYtzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Analysis;
var _c;
__turbopack_context__.k.register(_c, "Analysis");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_analysis_page_tsx_92e66a1b._.js.map