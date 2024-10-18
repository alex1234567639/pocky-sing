<template>
  <div class="agree-popup" @click="props.closeAgree">
    <div class="content-container scroll-disable" @click.stop>
      <PopupTitle :data="titleInfo"/>

      <div class="content-text">
        Pocky 奇幻歌劇院活動參加<br>
        個人資料蒐集、處理及相片、活動肖像利用告知暨授權同意書
      </div>

      <div class="authorize">
        <div class="authorize-text scroll">
          <div class="font-bold">【Pocky奇幻歌聚院活動注意事項】</div>
          本活動由格力高台灣股份有限公司（下稱「主辦單位」）發起，並授權台灣博報堂股份有限公司執行（下稱「執行單位」）。主辦單位就活動規則之解釋及活動程序之變更享有最終決定權，參加者就此均知悉且同意。<br>
          1. 活動期間內，參加者每個人每天僅限一次抽獎機會，次數限制重置時間為每日00:00 am，各獎項之領獎注意事項及兌獎辦法將分別通知各該獎項中獎人。<br>
          2. 主辦單位與執行單位將盡善良管理人之注意義務，於AI生成製作成果前，已設定過濾負面、不雅、包含但不限於侵害他人商標等任何違反法律或命令、公序良俗、或任何其他不當之內容。參加者應擔保其於本活動所上傳之所有內容（包含但不限於文字、圖片、影音等）皆擁有完整有效之權利、或已取得權利人完整有效之授權得以進行本活動之任一行為。參加者投稿之所有內容禁止歧視、人身攻擊及傷害、暴力、驚悚、不雅文字、帶有情色性暗示、侵犯他人權益、任何違反法律或命令之虞(包含但不限於指令/關鍵字中含有其他商品品牌/商標名稱等)、違反公序良俗，或任何其他違法或不當之情形，並應擔保其於本活動所上傳之所有內容無侵害第三方權利或利益。
             前述參加者上傳內容之審查，以主辦單位及執行單位之判斷為準。<br>
             若有前述不當行為所引起之法律責任，或遭第三人提出侵權或損害賠償訴訟，應由參加者自行承擔所有法律責任，主辦單位同時有權於活動的任何階段單方面取消其參加及獲獎資格，參加者不得異議；如主辦單位或執行單位因參加者之不當行為，而遭第三人提起訴訟主張民、刑事責任者，參加者應賠償主辦單位或執行單位因遭求償所生之任何損害（包含但不限於程序費用、裁判費、律師費、交通費、賠付於第三人之損害賠償及和解金等。）<br>
          3. 參加者明確知悉本活動使用AI程式及其相關之技術，於本活動運用該等技術產出之影音檔可能與他人使用本活動或其他類似技術產出之成果相似，且主辦單位及執行單位不保證包含但不限於製作成果之正確性、完整性、實用性或無瑕疵。<br>
          4. 參加者同意，透過本活動使用主辦單位提供之AI程式所製作之影音檔，該影音檔所有權益（包含但不限於所有權、智慧財產權及其他使用收益之權利或利益）皆歸主辦單位所有，主辦單位及執行單位有權將該影音檔使用於【Pocky奇幻歌聚院】官方廣告與相關行銷素材，並進行重製、編輯、改作、公開傳輸、散佈及行銷等利用行為，且無須另行通知或支付參加者任何費用，參加者同意不對主辦單位及執行單位主張任何相關權利。<br>
          5. 活動期間內，根據網路使用流量監測，主辦單位保有隨時單方面變更參加活動資格設定之權利。
          6. 參加者保證所有填寫或提出之資料均為真實、正確且完整，如因參加者之資料不實或填寫不正確或不完整或無法辨識等問題導致無法兌獎者，視同參加者自願放棄兌獎資格，獎項將不另行補發，主辦單位不負任何責任。若參加者逾期兌獎，視同其自行放棄兌獎資格，參加者不得異議，且如有致損害於主辦單位或其他任何第三人，參加者應自行負一切賠償責任。如主辦單位因參加者參加本活動之任何行為而遭第三人提起訴訟主張民、刑事責任者，參加者應賠償主辦單位因遭求償所生之任何損害（包含但不限於程序費用、裁判費、律師費、交通費、賠付於第三人之損害賠償及和解金等）。<br>
          7. 主辦單位有權檢視各活動參加者之各參與行為及兌獎情形是否涉嫌不法或有違常理之異常狀況，包含但不限於：人為操作蓄意偽造、短時間異常多筆參與行為、透過任何電腦程式參與活動、詐欺或以任何其他不正當的方式意圖進行不實或虛偽活動參與行為、或登錄資料不實或不正確或盜用任何第三人之資料，或有違反活動規範之行為。活動參加者因前述情形所獲得之全部活動資格及獎品，主辦單位及執行單位皆保有變更、終止參加活動資格、取消兌獎資格或暫停活動的權利。<br>
          8. 參加者如兌換本活動實體獎項，其獎品規格及樣式以實物為準，且不得要求折抵現金、退換、轉售或折換其他物品。主辦單位並保有最終修改或變更活動方式及更換活動獎品之權利。本活動獎品如遇有缺貨或不可抗力之因素無法提供時，主辦單位有權以其他等值商品替代。獎品規格以主辦單位網站最新公布資料為準。<br>
          9. 所有參加本活動者應於提供或填寫個人資料前，詳閱【個人資料告知事項暨同意書】，而於參加者提供或填寫個人資料後，視為同意主辦單位及執行單位得於本活動目的範圍內蒐集、處理暨利用其個人資料。主辦單位及執行單位承諾遵守【個人資料保護法】相關規定，以維護參加者權益。<br>
          10. 依中華民國所得稅法規定，中獎價值累計超過NT$1,000，中獎者需繳交身分證影本供報稅使用，年度報稅時將計入個人所得；中獎價值累計超過NT$20,000須扣繳10%稅金，中獎者若不願意配合，則視為自動棄權。<br>
          11. 本活動僅限於活動舉辦地區（設定台灣門號始可參加）設籍於中華民國地區（含台澎金馬）並領有中華民國身分證之居民參加，設籍其他地區者視為無效登錄資料，獎品寄送地址亦僅限中華民國地區（含台澎金馬），海外地區恕無法配送。<br><br>
          <div class="font-bold">【個人資料告知事項暨同意書】</div>
          一、告知事項：<br>
          1. 蒐集個人資料公司：格力高台灣股份有限公司（主辦單位）及台灣博報堂股份有限公司（執行單位）。<br>
          2. 蒐集之目的：辦理本次Pocky奇幻歌聚院活動及作為後續相關程序之聯繫與再行銷使用。<br>
          3. 個人資料之類別：可辨識參加者之姓名、電話、地址及電子郵件（抽獎活動獎項之一獎、二獎、三獎及四獎之中獎者另外包含出生年月日與國民身分證統一編號）。<br>
          4. 個人資料利用之期間：除法令另有規定外，個人資料利用自本活動起始日起，至蒐集之目的消失時止。<br>
          5. 個人資料利用之地區：主辦單位營運範圍，僅限於台灣、金門、澎湖、馬祖地區利用，不會移轉至其他地區利用。<br>
          6. 個人資料利用之對象及方式：由主辦單位及執行單位之業務承辦人員於辦理本活動之特定目的必要範圍內，依通常作業所必要之方式利用此個人資料。<br>
          7. 依個人資料保護法第三條規定台端得行使之權利及方式：台端得向主辦單位及執行單位提出申請(主辦單位服務電話：0809-099-007，主辦單位服務時間：週一~週五 9:00-18:00 (午休時間 12:30-13:30/例假日除外；執行單位服務電話：02-2545-6622，執行單位服務時間: 週一~週五，10:00~12:00/14:00~17:00，例假日及國定假日恕不提供服務)，以查詢、閱覽、製給複製本；或補充／更正、請求停止蒐集、處理、利用或刪除個人資料內容之一部或全部（註：參加者申請查詢、閱覽、製給複製本時，主辦單位及執行單位將酌收必要成本費用）。<br>
          8. 除【個人資料告知事項暨同意書】之告知事項第二點外，主辦單位及執行單位因Pocky奇幻歌聚院活動所獲得之個人資訊不會作其他任何使用。<br>
          9. 台端了解參與本活動即視為台端已瞭解以上之活動告知事項，並已清楚瞭解主辦單位及執行單位蒐集、處理及利用個人資料之目的及用途，並同意主辦單位及執行單位於上述告知事項範圍內，得蒐集、處理及利用台端個人資料。
        </div>
      </div>

      <div class="check-box">
        <label class="check-box-label">
          <input v-model="isCheck" type="checkbox">
          <span class="custom-checkbox"></span>
          <span>本人同意授權</span>
        </label>
      </div>

      <div v-if="!isCheck" class="btn">
        <div class="btn-text">下一步</div>
        <img src="/src/assets/img/disable-btn-m.webp" alt="">
      </div>
      <div v-else class="btn" @click="showIllustration">
        <div class="btn-text" style="color: #E10414">下一步</div>
        <img src="/src/assets/img/btn-m.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import PopupTitle from './PopupTitle.vue'

const props = defineProps({
  closeAgree: Function
})

// 標題
const titleInfo = ref({
  title: '授權同意書',
  color: '#6A3906',
  pockyColor: '#723600',
})

const isCheck = ref(false)
const emit = defineEmits(['showIllustration'])
const showIllustration = () => {
  emit('showIllustration')
}
</script>

<style lang="scss" scoped>
.agree-popup {
  @apply fixed left-0 top-0 z-50 w-full h-full flex justify-center items-center;
  background-color: rgba(0, 0, 0, 0.7);
  .content-container {
    @apply bg-white;
    width: 85vw;
    max-height: 90vh;
    border-radius: 5.33vw;
    padding: 6.4vw 4.26vw;
    .content-text {
      @apply text-center tracking-wide leading-[5.5vw];
      font-size: 3.2vw;
      width: 62.4vw;
      margin: 2.4vw auto 2.93vw;
    }
    .authorize {
      @apply w-full bg-[#FCF0E1];
      height: 53.33vw;
      padding: 3.2vw 2.13vw 3.2vw 3.2vw;
      border-radius: 1.06vw;
      .authorize-text {
        @apply w-full h-full leading-[7vw] text-justify;
        font-size: 3.73vw;
        padding: 0 2vw 0 0;
      }
    }
    .check-box {
      @apply flex justify-center items-center;
      margin: 4.26vw 0 8.53vw;
      input[type="checkbox"] {
        @apply absolute opacity-0 cursor-pointer;
        &:checked + .custom-checkbox {
          background-color: #6A3906;
        }
        &:checked + .custom-checkbox::after {
          @apply block;
          border-color: #F7D55A;
        }
      }
      .custom-checkbox {
        @apply relative bg-white inline-block rounded-full;
        width: 8vw;
        height: 8vw;
        border: 0.53vw solid #6A3906;
        margin: 0 2.13vw 0 0;
        &::after {
          @apply absolute block;
          content: "";
          width: 2.5vw;
          height: 3.73vw;
          border: solid #FDF2CE;
          border-width: 0 1vw 1vw 0;
          transform: rotate(45deg);
          top: 1.2vw;
          left: 2.4vw;
        }
      }
      .check-box-label {
        @apply flex items-center font-bold cursor-pointer;
        font-size: 4.26vw;
        color: #6A3906;
      }
    }
    .btn {
      @apply relative;
      width: 74.4vw;
      margin: 0 auto;
      .btn-text {
        @apply absolute top-[3vw] left-0 text-white w-full flex justify-center items-center font-bold tracking-wider;
        font-size: 5.33vw;
      }
      img {
        @apply w-full;
      }
    }
  }
}
</style>
