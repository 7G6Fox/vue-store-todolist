<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <p class="comment">
      <strong>用户评价</strong>
      <span
        >查看更多
        <i class="arrow-right">></i>
      </span>
    </p>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" />
      <span>
        {{ commentInfo.user.uname }}
      </span>
    </div>

    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span>{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        v-for="(item, index) in commentInfo.images"
        :key="index"
        :src="item"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/components/common/util";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      // console.log("date", date);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-info {
  padding: 1.5rem;
  font-family: "黑体";
  border-bottom: 1rem solid gainsboro;
  .comment {
    font-size: 1.4rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid gainsboro;
    span {
      float: right;
      font-size: 1.2rem;
      color: $mall-orange;
    }
  }
  .info-user {
    padding: 1rem 0;
    font-size: 1.4rem;
    color: #595959;
    letter-spacing: 0.1rem;
    img {
      width: 6rem;
      border-radius: 50%;
    }
  }
  .info-detail {
    p {
      letter-spacing: 1px;
      line-height: 2rem;
      font-size: 1.3rem;
    }
    .info-other {
      padding: 1rem 0;
      font-size: 1.3rem;
      color: gray;
      span {
        margin-right: 30px;
      }
    }
  }
  .info-imgs{
      width: 90%;
      margin-top: 10px;
  }

}
</style>