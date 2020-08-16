<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <b-textarea v-model="json" rows="20" />
            </b-col>
            <b-col>
                <autoform :json="json" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import autoform from "@/components/autoform.vue";
export default {
    name: "Home",
    data: function() {
        return {
            json: `  {
  "url": "http://localhost:3000/",
  "title": "Example Form",
  "method": "post",
  "data": [
    {
      "name": "text",
      "type": "text",
      "description": "Description for the text."
    },
    {
      "name": "password",
      "type": "password",
      "description": "Description for the password."
    },
    {
      "name": "datepicker",
      "type": "datepicker",
      "description": "Description for the datepicker."
    },
    {
      "name": "tags",
      "type": "tags",
      "description": "Description for the tags."
    },
    {
      "name": "time",
      "type": "time",
      "description": "Description for the time."
    },
    {
      "name": "range",
      "type": "range",
      "max": 100,
      "min": 0,
      "step": 2,
      "description": "Description for the range."
    },
    {
      "name": "select",
      "type": "select",
      "items": [
        "option1",
        "option2",
        "option3",
        "option4",
        "option5",
        "option6"
      ],
      "description": "Description for the select."
    },
    {
      "name": "radio",
      "type": "radio",
      "items": [
        "radio1",
        "radio2",
        "radio3",
        "radio4",
        "radio5",
        "radio6"
      ],
      "description": "Description for the radio."
    },
    {
      "name": "check",
      "type": "check",
      "items": [
        "check1",
        "check2",
        "check3",
        "check4",
        "check5",
        "check6"
      ],
      "description": "Description for the check."
    },
    {
      "name": "color",
      "type": "color",
      "description": "Description for the color."
    },
    {
      "name": "rate",
      "type": "rate",
      "description": "Description for the rate."
    },
    {
      "name": "textarea",
      "type": "textarea",
      "description": "Description for the textarea."
    },
    {
      "name": "file",
      "type": "file",
      "description": "Description for the file."
    },
    {
      "name": "spinbutton",
      "type": "spinbutton",
      "max": 100,
      "min": -100,
      "step": 10,
      "description": "Description for the spinbutton."
    }
  ]
}`
        };
    },
    methods: {
        onJsonChange: function() {
            console.log("changed");
        }
    },
    components: {
        autoform
    }
};
</script>
