(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{331:function(e,t,n){var content=n(336);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("dbaafa6a",content,!0,{sourceMap:!1})},332:function(e,t,n){var content=n(338);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("365830b0",content,!0,{sourceMap:!1})},333:function(e,t,n){"use strict";var o={data:function(){return{q1Submitted:!1,Quest1:this.refill}},props:{forceEmpty:{type:Boolean,default:!1},lock:{type:Boolean,default:!1},refill:{type:String,default:void 0},exam:{type:Boolean,default:!1},question:{type:Object,default:function(){return{text:"Question",options:{1:"Option"},feedback:{1:"Feedback"},conclusion:""}}},qId:{type:String,default:"0"}},methods:{submitAnswer:function(){this.q1Submitted=!0,""!=this.Quest1&&this.$emit("response",this.Quest1)}},watch:{forceEmpty:function(){this.q1Submitted=!1,this.Quest1=void 0}}},r=(n(335),n(11)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"pure-radiobutton"},[n("fieldset",{attrs:{tabindex:"0"}},[n("legend",[n("strong",{staticClass:"question",domProps:{innerHTML:e._s(e.question.text)}})]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$t("selectRight"))}}),e._v(" "),n("ol",{attrs:{type:"1"}},e._l(e.question.options,(function(t,o){return n("li",{key:o},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Quest1,expression:"Quest1"}],attrs:{disabled:e.lock,type:"radio",name:"q"+e.qId,id:"radioq"+e.qId+o},domProps:{value:o,checked:e._q(e.Quest1,o)},on:{click:function(t){e.q1Submitted=!1},change:function(t){e.Quest1=o}}}),n("label",{attrs:{for:"radioq"+e.qId+o},domProps:{innerHTML:e._s(t)}})])})),0),e._v(" "),n("b-button",{attrs:{disabled:e.q1Submitted||e.lock},on:{click:e.submitAnswer}},[e._v(e._s(e.exam?e.$t("submitTo"):e.$t("submit")))])],1),e._v(" "),n("p",[e._v(" ")]),e._v(" "),!e.Quest1&&e.q1Submitted?n("p",{attrs:{"aria-live":"polite"},domProps:{innerHTML:e._s(e.$t("pleaseAnswer"))}}):e._e(),e._v(" "),e.Quest1&&e.q1Submitted?n("p",{attrs:{tabindex:"0","aria-live":"assertive"},domProps:{innerHTML:e._s(e.question.feedback[e.Quest1])}}):e._e(),e._v(" "),e.Quest1&&e.q1Submitted&&e.question.conclusion?n("p",{attrs:{tabindex:"0","aria-live":"assertive"},domProps:{innerHTML:e._s(e.question.conclusion)}}):e._e()])}),[],!1,null,"3c20c8ce",null);t.a=component.exports},334:function(e,t,n){"use strict";var o={data:function(){return{q2Submitted:!1,Quest2:this.refill}},props:{forceEmpty:{type:Boolean,default:!1},lock:{type:Boolean,default:!1},refill:{type:Array,default:function(){return[]}},exam:{type:Boolean,default:!1},question:{type:Object,default:{text:"Question",options:{1:"Option"},feedback:{right:"<span class='v-right> <strong>Correct!</strong>",wrong:"<span class='v-wrong> <strong>Incorrect.</strong>"}}},qId:{type:String,default:"0"},Answer:{type:Array,default:function(){return[]}}},methods:{arraysMatch:function(e,t){if(e.length!==t.length)return!1;var n=e.concat().sort();for(var i in n)if(n[i]!==t[i])return!1;return!0},isAcceptable:function(e){return Array.isArray(e)&&e.length},submitAnswer:function(){this.q2Submitted=!0,this.$emit("response",this.Quest2)}},watch:{forceEmpty:function(){this.q2Submitted=!1,this.Quest2=[]}}},r=(n(337),n(11)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"pure-checkbox"},[n("strong",{staticClass:"question",domProps:{innerHTML:e._s(e.question.text)}}),e._v(" "),n("fieldset",{attrs:{tabindex:"0"}},[n("legend",{domProps:{innerHTML:e._s(e.$t("checkAll"))}}),e._v(" "),n("ol",{attrs:{type:"1"}},e._l(e.question.options,(function(t,o){return n("li",{key:o},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Quest2,expression:"Quest2"}],attrs:{disabled:e.lock,type:"checkbox",name:"q"+e.qId,id:"checkboxq"+e.qId+o},domProps:{value:o,checked:Array.isArray(e.Quest2)?e._i(e.Quest2,o)>-1:e.Quest2},on:{click:function(t){e.q2Submitted=!1},change:function(t){var n=e.Quest2,r=t.target,l=!!r.checked;if(Array.isArray(n)){var c=o,d=e._i(n,c);r.checked?d<0&&(e.Quest2=n.concat([c])):d>-1&&(e.Quest2=n.slice(0,d).concat(n.slice(d+1)))}else e.Quest2=l}}}),e._v(" "),n("label",{attrs:{for:"checkboxq"+e.qId+o},domProps:{innerHTML:e._s(t)}})])})),0),e._v(" "),n("b-button",{attrs:{disabled:e.q2Submitted},on:{click:e.submitAnswer}},[e._v(e._s(e.exam?e.$t("submitTo"):e.$t("submit")))])],1),e._v(" "),n("p",[e._v(" ")]),e._v(" "),!e.isAcceptable(e.Quest2)&&e.q2Submitted?n("p",{domProps:{innerHTML:e._s(e.$t("pleaseAnswer"))}}):e._e(),e._v(" "),e.isAcceptable(e.Quest2)&&e.q2Submitted?n("span",[e.arraysMatch(e.Quest2,e.Answer)?n("p",[n("span",{domProps:{innerHTML:e._s(e.question.feedback.right)}})]):n("p",[n("span",{domProps:{innerHTML:e._s(e.question.feedback.wrong)}})]),e._v(" "),e.Quest2&&e.q2Submitted&&e.question.conclusion?n("p",{domProps:{innerHTML:e._s(e.question.conclusion)}}):e._e()]):e._e()])}),[],!1,null,"43cedc9a",null);t.a=component.exports},335:function(e,t,n){"use strict";var o=n(331);n.n(o).a},336:function(e,t,n){var o=n(26);(e.exports=o(!1)).push([e.i,".question[data-v-3c20c8ce]{margin-top:1em;position:relative;display:inline-block}",""])},337:function(e,t,n){"use strict";var o=n(332);n.n(o).a},338:function(e,t,n){var o=n(26);(e.exports=o(!1)).push([e.i,".question[data-v-43cedc9a]{margin-top:1em;position:relative;display:inline-block}",""])},388:function(e,t,n){var content=n(514);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("353096b4",content,!0,{sourceMap:!1})},389:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"warnReset":"This will erase your answer and score for this test, are you certain?","Answered":"Answered","markTest":"Mark my test","testComplete":"Test Completed","tryAgain":"Try Again","scoreIs":"Your final score is","Questions":{"q1":{"text":"Which of the following is <strong style=\'text-transform: uppercase;\'>not</strong> included in a work plan?","options":{"1":"Activity","2":"Deliverable","3":"Results","4":"Risk"},"feedback":{"1":"","2":"","3":"","4":""}},"q2":{"text":"Where are government priorities first announced?","options":{"1":"In the Federal Budget","2":"In the Speech from the Throne","3":"In a Mandate Letter","4":"In a Treasury Board directive"},"feedback":{"1":"","2":"","3":"","4":""}},"q3":{"text":"Where would you find detailed information on what your organization does and what it plans to do over the next three years?","options":{"1":"Mandate Letter","2":"Departmental Plan","3":"Departmental Results Report","4":"Management Accountability Framework"},"feedback":{"1":"","2":"","3":"","4":""}},"q4":{"text":"Your 360 Scan reiterates for you that your organization has a low risk tolerance. At the same time, the Deputy Minister wants to see more innovation. What is the best course of action to take as these opposing forces impact your work plan? ","options":{"1":"Wait until others have successfully implemented an innovation project ","2":"Start a small scale innovation project and learn from it","3":"Commence a highly-visible innovation project with current staffing levels","4":"Keep things as they are"},"feedback":{"1":"","2":"","3":"","4":""}},"q5":{"text":"Which part of the work plan should be updated with &ldquo;Establish collective staffing pools&rdquo; to address call centre risks like high turnover and challenges in staffing?","options":{"1":"Likelihood","2":"Impact","3":"Mitigation","4":"Resources"},"feedback":{"1":"","2":"","3":"","4":""}},"q6":{"text":"Last year, you did not meet your target of answering calls within 30 seconds. Call centers are becoming more automated, an approach favored by senior management. Which activity is the most appropriate to take as you draft your work plan?","options":{"1":"Incorporate digital solutions","2":"Change the target","3":"Hire more staff","4":"Conduct team meetings"},"feedback":{"1":"","2":"","3":"","4":""}},"q7":{"text":"You’d like to find out if clients are satisfied with the live support provided by the call center. What deliverable would be added to the activity “Offer live support to clients” to address this?","options":{"1":"Create a client satisfaction survey","2":"Resolve call, text or chat within 2 minutes ","3":"One call, text or chat out of 10 is escalated for resolution","4":"Answer calls within 30 seconds"},"feedback":{"1":"","2":"","3":"","4":""}},"q8":{"text":"You have added a new activity to your work plan about offering support to clients through automated means. This would be accomplished by implementing a chatbot system available 24 hours a day. The chatbot would respond to customer requests online without involving an agent. What deliverable would be added to the work plan for this activity?","options":{"1":"Change call center operational hours to 24/7","2":"99% uptime for live chat system","3":"30% of online requests would be resolved by chatbot","4":"Chatbot interactions will be monitored by a call center agent "},"feedback":{"1":"","2":"","3":"","4":""}},"q9":{"text":"With any online technology, like the chatbot system, there is the risk of a privacy breach. &ldquo;Secure firewall and encryption&rdquo; could be added to the work plan as a:","options":{"1":"Sub-activity","2":"Mitigation","3":"Impact","4":"Directorate priority"},"feedback":{"1":"","2":"","3":"","4":""}},"q10":{"text":"Which of the following would be a risk for the new activity “Offer support to clients through automated means”? ","options":{"1":"Staff turnover ","2":"Not meeting the performance standard ","3":"Operational hours not staffed","4":"System breakdown "},"feedback":{"1":"","2":"","3":"","4":""}},"q11":{"text":"Temporary Help to deliver day-to-day activities is paid out of which budget? ","options":{"1":"Operating & Maintenance (O&M)","2":"Salary","3":"Grants and Contributions (Gs&Cs)","4":"Capital"},"feedback":{"1":"","2":"","3":"","4":""}},"q12":{"text":"Which of the following details the total projected expenditures for the upcoming fiscal year?","options":{"1":"Departmental Results Report","2":"Interim Supply","3":"Supplementary Estimates","4":"Departmental Plan"},"feedback":{"1":"","2":"","3":"","4":""}},"q13":{"text":"Which reports provide information for a full fiscal cycle? ","options":{"1":"Full Supply","2":"Public Accounts","3":"Departmental Results Report","4":"Departmental Plan"},"feedback":{"wrong":"","right":""}},"q14":{"text":"Your IT infrastructure costs have increased 10% per year for the past few years. If your current costs are $20,000, what amount will you put in your budget requirements for next year? ","options":{"1":"$20,000","2":"$20,200","3":"$22,000 ","4":"$22,220"},"feedback":{"1":"","2":"","3":"","4":""}},"q15":{"text":"For last year’s office supplies, you set aside $3,000, and $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year?","options":{"1":"$2,000","2":"$2,500","3":"$3,000 ","4":"$5,500"},"feedback":{"1":"","2":"","3":"","4":""}},"q16":{"text":"You have consistently set aside $8,000 year after year for call center agent training. Last year, you spent $5,000 on training. This year, you’re forecasting to spend $10,500. What would you do for your budget requirements for next year?","options":{"1":"Ask for the amount you forecast to spend this year ","2":"Ask for the amount you spent last year","3":"Ask for the same amount you’ve asked for year after year","4":"Ask why there’s been a fluctuation to inform your forecast"},"feedback":{"1":"","2":"","3":"","4":""}},"q17":{"text":"You added an activity to your work plan about implementing a chatbot system by mid-year. Your initial research shows that chatbot systems cost between $25 and $100 per month. What amount will you put in your budget requirements? ","options":{"1":"$300","2":"$600","3":"$900","4":"$1,200"},"feedback":{"1":"","2":"","3":"","4":""}},"q18":{"text":"The current year’s Salary budget is $760,000. You’re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You’ll need time to hire them and estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ","options":{"1":"$760,000","2":"$800,000","3":"$810,000","4":"$820,000"},"feedback":{"1":"","2":"","3":"","4":""}},"q19":{"text":"The chatbot system implementation will incur $15,000 in IT costs for hosting which will be provided by another department on a cost recovery basis. This will be formalized in an MOU between organizations. Hosting costs in your budget will be …?","options":{"1":"$15,000 Non-discretionary ","2":"$15,000 Discretionary ","3":"$15,000 Grants and Contributions","4":"$15,000 Capital"},"feedback":{"1":"","2":"","3":"","4":""}},"q20":{"text":"You’ve submitted your budget requirements and your director asks you to cut travel from $20,000 to $12,000. What action could you take?","options":{"1":"Cut some discretionary costs","2":"Explore video conferencing options ","3":"Change the budget requirement to $12,000","4":"Ask finance to find $8,000"},"feedback":{"right":"","wrong":""}}}},"fr":{"warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?","Answered":"Répondue","markTest":"Grader mon examen","testComplete":"Examen complété","tryAgain":"Essayer de nouveau","scoreIs":"Votre note finale est de","Questions":{"q1":{"text":"Lequel des éléments suivants n\'est <strong style=\'text-transform:uppercase\'>PAS</strong> inclus dans un plan de travail?","options":{"1":"Activité","2":"Produit livrable","3":"Résultats","4":"Risque"},"feedback":{"1":"","2":"","3":"","4":""}},"q2":{"text":"Où les priorités du gouvernement sont-elles d\'abord annoncées?","options":{"1":"Dans le budget fédéral","2":"Dans le discours du Trône","3":"Dans une lettre de mandat","4":"Dans une directive du Conseil du Trésor"},"feedback":{"1":"","2":"","3":"","4":""}},"q3":{"text":"Où trouveriez-vous des renseignements détaillés sur ce que votre organisation fait et ce qu\'elle prévoit faire au cours des trois prochaines années?","options":{"1":"Lettre de mandat","2":"Plan ministériel","3":"Rapport ministériel sur les résultats ","4":"Cadre de responsabilisation de gestion"},"feedback":{"1":"","2":"","3":"","4":""}},"q4":{"text":"Votre analyse à 360° réitère pour vous que votre organisation a une faible tolérance au risque. En même temps, le sous-ministre veut voir plus d\'innovation. Quelle est la meilleure ligne de conduite à adopter, car ces forces opposées ont une incidence sur votre plan de travail?","options":{"1":"Attendre que d\'autres aient mis en œuvre avec succès un projet d\'innovation","2":"Lancer un projet d\'innovation à petite échelle et en tirer des leçons","3":"Lancer un projet d\'innovation très visible avec les effectifs actuels.","4":"Garder les choses telles qu\'elles sont"},"feedback":{"1":"","2":"","3":"","4":""}},"q5":{"text":"Quelle partie du plan de travail devrait être mise à jour avec &laquo;Établir des bassins de dotation collective&raquo; pour tenir compte des risques liés aux centres d\'appels, comme le roulement élevé du personnel et les défis en dotation?","options":{"1":"Probabilité","2":"Impact","3":"Atténuation","4":"Ressources"},"feedback":{"1":"","2":"","3":"","4":""}},"q6":{"text":"L\'an dernier, vous n\'avez pas atteint votre objectif de répondre aux appels dans les 30 secondes. Les centres d\'appels sont de plus en plus automatisés, une approche privilégiée par la haute direction. Quelle est l\'activité la plus appropriée lorsque vous rédigez votre plan de travail?","options":{"1":"Incorporer des solutions numériques","2":"Changer la cible","3":"Embaucher plus de personnel","4":"Mener des réunions d\'équipe"},"feedback":{"1":"","2":"","3":"","4":""},"q7":{"text":"Vous aimeriez savoir si les clients sont satisfaits de l\'assistance en direct fournie par le centre d\'appels. Quel produit livrable serait ajouté à l\'activité pour y remédier?","options":{"1":"Résoudre un appel, un SMS ou un chat en moins de 2 minutes","2":"Moyenne de 4 sur 5 d\'après le sondage auprès des clients après le soutien","3":"Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."},"feedback":{"1":"","2":"","3":"","4":""}}},"q7":{"text":"Vous aimeriez savoir si les clients sont satisfaits de l\'assistance en direct fournie par le centre d\'appels. Quel produit livrable serait ajouté à l\'activité &laquo;Offrir un soutien en direct aux clients&raquo; pour répondre à cette question? ","options":{"1":"Créer un sondage auprès des clients après le soutien","2":"Résoudre un appel, un SMS ou un chat en moins de 2 minutes","3":"Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution","4":"Répondre aux appels dans les 30 secondes"},"feedback":{"1":"","2":"","3":"","4":""},"q7":{"text":"Vous aimeriez savoir si les clients sont satisfaits de l\'assistance en direct fournie par le centre d\'appels. Quel produit livrable serait ajouté à l\'activité pour y remédier?","options":{"1":"Résoudre un appel, un SMS ou un chat en moins de 2 minutes","2":"Moyenne de 4 sur 5 d\'après le sondage auprès des clients après le soutien","3":"Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."},"feedback":{"1":"","2":"","3":"","4":""}}},"q8":{"text":"Vous avez ajouté une nouvelle activité à votre plan de travail concernant l\'offre de soutien aux clients par des moyens automatisés. Pour ce faire, il faudrait mettre en place un système de chatbot disponible 24 heures sur 24. Le chatbot répondrait aux demandes des clients en ligne sans l\'intervention d\'un agent. Quel produit livrable serait ajouté au plan de travail pour cette activité?","options":{"1":"Changer les heures d\'ouverture du centre d\'appels à 24 heures sur 24, 7 jours sur 7.","2":"99% de temps de disponibilité pour le système de chat en direct","3":"30% des demandes en ligne seraient résolues par chatbot","4":"Les interactions du chatbot seront surveillées par un agent du centre d\'appels."},"feedback":{"1":"","2":"","3":"","4":""}},"q9":{"text":"Avec n\'importe quelle technologie en ligne, comme le système de chatbot, il y a le risque d\'une atteinte à la vie privée. À quel élément du plan de travail pourrait être ajouté &laquo;Un pare-feu sécurisé et cryptage&raquo;?","options":{"1":"Sous-activité","2":"Atténuation","3":"Impact","4":"Priorité de la Direction"},"feedback":{"1":"","2":"","3":"","4":""}},"q10":{"text":"Lequel des éléments suivants constituerait un risque pour la nouvelle activité &laquo;Offrir un soutien aux clients par des moyens automatisés&raquo;?","options":{"1":"Roulement de personnel","2":"Ne pas répondre à la norme de rendement","3":"Heures d\'ouverture non dotées en personnel","4":"Panne du système"},"feedback":{"1":"","2":"","3":"","4":""}},"q11":{"text":"L\'aide temporaire pour mener à bien les activités quotidiennes est payée à partir de quel budget?","options":{"1":"Exploitation et entretien (F et E)","2":"Salaire","3":"Subventions et contributions (S et C)","4":"Immobilisations"},"feedback":{"1":"","2":"","3":"","4":""}},"q12":{"text":"Lequel des éléments suivants détaille le total des dépenses prévues pour le prochain exercice financier?","options":{"1":"Rapport ministériel sur les résultats","2":"Approvisionnements provisoires","3":"Budget supplémentaire des dépenses","4":"Plan ministériel"},"feedback":{"1":"","2":"","3":"","4":""}},"q13":{"text":"Quels rapports fournissent des renseignements pour un cycle financier complet?","options":{"1":"Approvisionnement complet","2":"Comptes publics","3":"Rapport ministériel sur les résultats ","4":"Plan ministériel"},"feedback":{"1":"","2":"","3":"","4":""}},"q14":{"text":"Vos coûts d\'infrastructure informatique ont augmenté de 10% par an au cours des dernières années. Si vos coûts actuels sont de 20&nbsp;000&nbsp;$, quel montant inscrirez-vous dans votre budget pour l\'année prochaine? ","options":{"1":"20&nbsp;000&nbsp;$","2":"20&nbsp;200&nbsp;$","3":"22&nbsp;000&nbsp;$","4":"22&nbsp;200&nbsp;$"},"feedback":{"1":"","2":"","3":"","4":""}},"q15":{"text":"Pour les fournitures de bureau de l\'an dernier, vous avez mis de côté 3&nbsp;000&nbsp;$, et 2&nbsp;500&nbsp;$ ont été dépensés. Pour l\'année en cours, vous prévoyez dépenser 2&nbsp;500&nbsp;$. Quel montant allez-vous mettre dans votre budget pour l\'année prochaine?","options":{"1":"2&nbsp;000&nbsp;$","2":"2&nbsp;500&nbsp;$","3":"3&nbsp;000&nbsp;$","4":"5&nbsp;500&nbsp;$"},"feedback":{"1":"","2":"","3":"","4":""}},"q16":{"text":"Vous avez toujours mis de côté 8&nbsp;000&nbsp;$ année après année pour la formation des agents de centre d\'appels. L\'an dernier, vous avez dépensé 5&nbsp;000&nbsp;$ en formation. Cette année, vous prévoyez dépenser 10&nbsp;500&nbsp;$. Que feriez-vous pour votre budget de l\'année prochaine?","options":{"1":"Demandez le montant que vous prévoyez dépenser cette année ","2":"Demandez le montant que vous avez dépensé l\'année dernière","3":"Demandez le même montant que vous avez demandé année après année.","4":"Demandez pourquoi il y a eu une fluctuation pour éclairer vos prévisions. "},"feedback":{"1":"","2":"","3":"","4":""}},"q17":{"text":"Vous avez ajouté une activité à votre plan de travail concernant la mise en œuvre d\'un système de chatbot d\'ici le milieu de l\'année. Votre recherche initiale montre que les systèmes de chatbot coûtent entre 25 $ et 100 $ par mois. Quel montant allez-vous mettre dans votre budget? ","options":{"1":"300$","2":"600$","3":"900$","4":"1&nbsp;200&nbsp;$"},"feedback":{"1":"","2":"","3":"","4":""}},"q18":{"text":"Le budget salarial de l\'année en cours est de 760&nbsp;000&nbsp;$. Vous créez un nouveau poste d\'analyste en TI qui sera doté l\'an prochain. Le salaire annuel sera de 60&nbsp;000&nbsp;$. Vous aurez besoin de temps pour les embaucher et estimez qu\'ils commenceront en juin et ne travailleront que 10 mois. Quel sera votre budget salarial pour l\'année prochaine (en supposant que tout le reste demeure inchangé)?","options":{"1":"760&nbsp;000&nbsp;$","2":"800&nbsp;000&nbsp;$","3":"810&nbsp;000&nbsp;$","4":"820&nbsp;000&nbsp;$"},"feedback":{"1":"","2":"","3":"","4":""}},"q19":{"text":"La mise en œuvre du système de chatbot entraînera des coûts de 15&nbsp;000&nbsp;$ en TI pour l\'hébergement, qui seront fournis par un autre ministère selon le principe du recouvrement des coûts. Cela sera officialisé dans un protocole d\'entente entre les organisations. Les frais d\'hébergement dans votre budget seront de &hellip;?","options":{"1":"15&nbsp;000&nbsp;$ Non discrétionnaire ","2":"15&nbsp;000&nbsp;$ Discrétionnaire ","3":"15&nbsp;000&nbsp;$ Subventions et Contributions","4":"15&nbsp;000&nbsp;$ Immobilisations"},"feedback":{"1":"","2":"","3":"","4":""}},"q20":{"text":"Vous avez soumis vos exigences budgétaires et votre directeur vous demande de réduire vos déplacements de 20&nbsp;000&nbsp;$ à 12&nbsp;000&nbsp;$. Quelles mesures pourriez-vous prendre? ","options":{"1":"Réduire certains coûts discrétionnaires ","2":"Explorez les options de vidéoconférence","3":"Modifier les exigences budgétaires à 12&nbsp;000&nbsp;$","4":"Demandez au service des finances de trouver 8&nbsp;000&nbsp;$."},"feedback":{"right":"","wrong":""}}}}}'),delete e.options._Ctor}},513:function(e,t,n){"use strict";var o=n(388);n.n(o).a},514:function(e,t,n){var o=n(26);(e.exports=o(!1)).push([e.i,".planSection[data-v-2ae81922]{position:relative;height:100px}.planSectionBar[data-v-2ae81922]{text-transform:uppercase;position:absolute;background-color:#d1dfe1;width:100vw;height:30px;text-align:left;left:-15px;top:38%}.planSectionBar span[data-v-2ae81922]{padding:2px 10px 0;color:#4d4d4d;font-weight:700;background-color:#fff;display:inline-block;height:100%;margin-left:15px}.progressBar[data-v-2ae81922]{margin-bottom:2em;display:-webkit-box;display:flex;justify-content:space-around}.square[data-v-2ae81922]{font-size:.9em;font-weight:700;text-align:center;display:inline-block;width:42px;height:22px;background-color:#ddd;cursor:pointer;color:#4d4d4d}.filled[data-v-2ae81922]{background-color:#587c84;color:#fff}.Qactive[data-v-2ae81922]{background-color:#e0e59e;box-shadow:-3px 7px 6px rgba(0,0,0,.3);outline:1px solid #fff;color:#000}.filled.Qactive[data-v-2ae81922]{background-color:#b3c295}",""])},515:function(e,t,n){"use strict";var o=n(389),r=n.n(o);t.default=r.a},615:function(e,t,n){"use strict";n.r(t);n(3),n(6),n(30),n(31),n(2);var o=n(333),r=n(334),l={name:"examOne",data:function(){return{debugging:!1,isNull:!1,numQuestions:20}},components:{radioQuiz:o.a,checkboxQuiz:r.a},methods:{resetQuiz:function(){var e=this;this.$bvModal.msgBoxConfirm(this.$t("warnReset"),{cancelTitle:this.$t("cancel")}).then((function(t){t&&(e.isNull=!e.isNull,e.$store.commit("plan/resetQuiz"))})).catch((function(e){console.log(e)}))},markTest:function(){this.$store.commit("plan/lockQuiz"),this.$bvModal.show("Completed")},checkPercentage:function(){var e=0;for(var i in this.answerScore)"01"==this.answerScore[i][0]&&e++;return parseInt(e/this.numQuestions*100)},Refill:function(e){return this.answerScore[e]?this.answerScore[e][1]:void 0},calculateAnswer:function(e,t,n){e==t?this.$store.commit("plan/setScore",[n.toString(),"01",e]):this.$store.commit("plan/setScore",[n.toString(),"'10'",e])},arraysMatch:function(e,t,n){if(e.length!==t.length)return this.$store.commit("plan/setScore",[n.toString(),"'10'",e]),!1;var o=e.concat().sort();for(var i in o)if(o[i]!==t[i])return this.$store.commit("plan/setScore",[n.toString(),"'10'",e]),!1;this.$store.commit("plan/setScore",[n.toString(),"01",e])}},computed:{allDone:function(){return this.$store.getters["plan/getScore"]},AlertIsDismissed:{get:function(){return this.$store.state.plan.AlertIsDismissed},set:function(){this.$store.commit("plan/dismissAlert")}},tabIndex:{set:function(e){this.$store.commit("plan/setCurrentTab",e)},get:function(){return this.$store.state.plan.tabIndex}},answerScore:function(){return this.$store.state.plan.score},quizLocked:function(){return this.$store.state.plan.quizLocked}},watch:{answerScore:function(){Object.keys(this.answerScore).length===this.numQuestions&&this.$store.commit("plan/setComplete",this.checkPercentage())}}},c=(n(513),n(11)),d=n(515),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"pageTitle"},[e._v(e._s(e.$t("Test")))]),e._v(" "),n("b-container",[n("b-alert",{attrs:{show:!e.AlertIsDismissed,dismissible:""},on:{dismissed:function(t){e.AlertIsDismissed=!0}}},["en"==e.$i18n.locale?n("div",[n("p",[n("strong",[e._v("NOTE:")]),e._v(" This course and the final tests are currently in draft mode and will not officially count towards mandatory training requirements during this phase. We invite you to complete the tests for plan, spend and report and we welcome your feedback on the questions and functionality.  Your input will help to make this more effective.")]),e._v(" "),n("p",[e._v("For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation. ")]),e._v(" "),n("p",[e._v("There are three sections to the test - one for each phase: planning, spending and reporting. ")]),e._v(" "),n("p",[e._v("The passing grade is 80% for each of these sections.")]),e._v(" "),n("p",[e._v("Each section should take you around 15-20 minutes to complete. ")]),e._v(" "),n("p",[e._v("You can access course materials during the test and you can take it as many times as you need.")])]):e._e(),e._v(" "),"fr"==e.$i18n.locale?n("div",[n("p",[n("strong",[e._v("NOTE :")]),e._v(" Ce cours et les tests finaux sont actuellement en mode brouillon et ne compteront pas officiellement dans les exigences de formation obligatoire pendant cette phase. Nous vous invitons à compléter les tests pour planifier, dépenser et faire un rapport et nous vous invitons à nous faire part de vos commentaires sur les questions et les fonctionnalités.  Vos commentaires nous aideront à rendre le tout plus efficace.")]),e._v(" "),n("p",[e._v("Pour certaines des questions de ce test, vous êtes dans le rôle d'un responsable de centre d'appels. Des scénarios basés sur cette situation vous seront proposés. ")]),e._v(" "),n("p",[e._v("Le test comporte trois parties - une à la fin de chaque phase - planification, dépenses et rapports. ")]),e._v(" "),n("p",[e._v("La note de passage est de 80%, par partie. ")]),e._v(" "),n("p",[e._v("Chaque partie devrait vous prendre environ 15-20 minutes. ")]),e._v(" "),n("p",[e._v("Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.")])]):e._e()]),e._v(" "),n("p",[e._v("Question "+e._s(e.tabIndex+1)+" / "+e._s(e.numQuestions))]),e._v(" "),n("div",{staticClass:"progressBar"},e._l(e.numQuestions,(function(t,o){return n("a",{class:["square",{filled:e.answerScore[o],Qactive:e.tabIndex==o}],attrs:{href:"#",title:"Question "+parseInt(t)+(e.answerScore[o]?": "+e.$t("Answered"):""),"aria-label":"Question "+parseInt(t)+(e.answerScore[o]?": "+e.$t("Answered"):"")},domProps:{innerHTML:e._s(o+1)},on:{click:function(t){t.preventDefault(),e.tabIndex=o}}})})),0),e._v(" "),n("b-row",[n("b-col",{staticClass:"col"}),e._v(" "),n("b-col",{staticClass:"col-10"},[n("b-card",{attrs:{"no-body":""}},[n("b-tabs",{staticClass:"exam",attrs:{card:"",pills:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[n("b-tab",{attrs:{title:"01"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q1"),qId:"0",refill:e.Refill("0")},on:{response:function(t){return e.calculateAnswer(t,3,0)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"02"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q2"),qId:"1",refill:e.Refill("1")},on:{response:function(t){return e.calculateAnswer(t,2,1)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"03"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q3"),qId:"2",refill:e.Refill("2")},on:{response:function(t){return e.calculateAnswer(t,2,2)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"04"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q4"),qId:"3",refill:e.Refill("3")},on:{response:function(t){return e.calculateAnswer(t,2,3)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"05"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q5"),qId:"4",refill:e.Refill("4")},on:{response:function(t){return e.calculateAnswer(t,3,4)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"06"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q6"),qId:"5",refill:e.Refill("5")},on:{response:function(t){return e.calculateAnswer(t,1,5)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"07"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q7"),qId:"6",refill:e.Refill("6")},on:{response:function(t){return e.calculateAnswer(t,1,6)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"08"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q8"),qId:"7",refill:e.Refill("7")},on:{response:function(t){return e.calculateAnswer(t,3,7)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"09"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q9"),qId:"8",refill:e.Refill("8")},on:{response:function(t){return e.calculateAnswer(t,2,8)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"10"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q10"),qId:"9",refill:e.Refill("9")},on:{response:function(t){return e.calculateAnswer(t,4,9)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"11"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q11"),qId:"10",refill:e.Refill("10")},on:{response:function(t){return e.calculateAnswer(t,1,10)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"12"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q12"),qId:"11",refill:e.Refill("11")},on:{response:function(t){return e.calculateAnswer(t,4,11)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"13"}},[n("checkboxQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q13"),qId:"12",refill:e.Refill("12")},on:{response:function(t){return e.arraysMatch(t,["2","3"],12)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"14"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q14"),qId:"13",refill:e.Refill("13")},on:{response:function(t){return e.calculateAnswer(t,3,13)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"15"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q15"),qId:"14",refill:e.Refill("14")},on:{response:function(t){return e.calculateAnswer(t,2,14)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"16"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q16"),qId:"15",refill:e.Refill("15")},on:{response:function(t){return e.calculateAnswer(t,4,15)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"17"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q17"),qId:"16",refill:e.Refill("16")},on:{response:function(t){return e.calculateAnswer(t,2,16)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"18"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q18"),qId:"17",refill:e.Refill("17")},on:{response:function(t){return e.calculateAnswer(t,3,17)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"19"}},[n("radioQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q19"),qId:"18",refill:e.Refill("18")},on:{response:function(t){return e.calculateAnswer(t,1,18)}}})],1),e._v(" "),n("b-tab",{attrs:{title:"20"}},[n("checkboxQuiz",{attrs:{exam:"",lock:e.quizLocked,forceEmpty:e.isNull,question:e.$t("Questions.q20"),qId:"19",refill:e.Refill("19")},on:{response:function(t){return e.arraysMatch(t,["1","2","3"],19)}}})],1)],1)],1)],1),e._v(" "),n("b-col",{staticClass:"col"})],1)],1),e._v(" "),n("div",{staticClass:"text-center"},[n("b-button-group",{staticClass:"mt-2"},[n("b-button",{attrs:{disabled:e.tabIndex<=0},on:{click:function(t){e.tabIndex--}}},[e._v(e._s(e.$t("previousPage")))]),e._v(" "),n("b-button",{attrs:{disabled:e.tabIndex>=19},on:{click:function(t){e.tabIndex++}}},[e._v(e._s(e.$t("nextPage")))])],1)],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.allDone?n("p",[n("b-button",{on:{click:e.markTest}},[e._v(e._s(e.$t("markTest")))]),e._v(" "),n("b-button",{on:{click:e.resetQuiz}},[e._v(e._s(e.$t("tryAgain")))])],1):e._e()]),e._v(" "),n("div",{staticClass:"bottomNav planSection"},[n("div",{staticClass:"planSectionBar"},[n("span",[e._v(e._s(e.$t("plan")))])])]),e._v(" "),e.debugging?n("div",[n("p",[e._v("Alldone: "+e._s(e.allDone))]),e._v(" "),n("p",[e._v(e._s(e.answerScore))])]):e._e(),e._v(" "),n("b-modal",{attrs:{id:"Completed",size:"lg",okOnly:""}},[n("p",{staticClass:"pageTitle"},[e._v(e._s(e.$t("testComplete")))]),e._v(" "),n("p",[e._v(e._s(e.$t("scoreIs"))+" "+e._s(e.allDone)+"%.")]),e._v(" "),e.allDone<80?n("p",[e._v(" "+e._s(e.$t("notPassed")))]):e._e(),e._v(" "),e.allDone>=80&&e.allDone<100?n("p",[e._v(e._s(e.$t("Passed"))+" "),n("nuxt-link",{attrs:{to:e.localePath("index")}},[e._v(e._s(e.$t("homePage")))])],1):e._e(),e._v(" "),100==e.allDone?n("p",[e._v(" "+e._s(e.$t("Excelled"))+" "),n("nuxt-link",{attrs:{to:e.localePath("index")}},[e._v(e._s(e.$t("homePage")))])],1):e._e()])],1)}),[],!1,null,"2ae81922",null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports}}]);