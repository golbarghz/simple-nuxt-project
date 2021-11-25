<template>
  <div>
     <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userInfo.firstname"
            label="First name"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userInfo.lastname"
            label="Last name"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userInfo.email"
            label="E-mail"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
         <v-btn
        @click="submit()"
      >
        submit
      </v-btn>
      </v-row>
    </v-container>
  </v-form>
  </div>
</template>
<script>
export default {
    data(){
      return{
        userInfo : {
      firstname: null,
      lastname: null,
      email: null
        },
      }
    },
    methods : {
      submit() {
        this.$store.commit('user/signUp', this.userInfo)
        this.resetForm()

      },
      resetForm() {
        this.userInfo ={
          firstname: "",
          lastname: "",
          email: ""
        }
      }
    }
}
</script>
