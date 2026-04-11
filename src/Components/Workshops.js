import Typography from "@mui/material/Typography";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import PayDialog from "./PayDialog";
import PostPopup from "./PostPopup";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Bar from "./Bar";
import Foot from "./Foot";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// imgs
import img1 from "../imgs/postimg.png";
import eventimg1 from "../imgs/salamimg.jpg";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
export default function Workshops() {
  const [openPost, setOpenPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState({
    content: "",
    sentence: "",
  });
  const [openEventForm, setOpenEventForm] = useState(false);

  const [visibleEvent, setVisibleEvent] = useState(3);
  const [visiblePost, setVisiblePost] = useState(3);

  const handleConfirm = () => {
    setOpenEventForm(false);
  };
  const postsarr = [
    {
      id: 1,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
    {
      id: 2,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
    {
      id: 3,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
    ,
    {
      id: 4,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
    {
      id: 5,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
    {
      id: 6,
      img: img1,
      content: `عجلة المشاعر والأكل العاطفي

هل بتاكل لأنك جوعان… ولا لأنك متضايق؟

أحيانًا ما نكون محتاجين أكل، بل محتاجين:

راحة

أمان

تفريغ مشاعر

🔄 عجلة المشاعر بتورجينا إنو:

الحزن → أكل سكريات

التوتر → أكل سريع

الملل → بلع بدون وعي

🍽️ المشكلة مو بالأكل… المشكلة إنو الأكل صار الطريقة 
الوحيدة للتعامل مع المشاعر.

🌱 خطوة تغيير بسيطة: بلحظة الشهية الانفعالية قبل ما 
تاكل اسأل نفسك:

شو الشعور اللي حاسس فيه هلأ؟

إذا عرفت الشعور، نص الحل صار موجود ✨
`,
      lastsentence: `عافية وسلام – لأن صحتك النفسية أساس تغذيتك.`,
      title: "عجلة المشاعر والاكل العاطفي",
      overview: "هل بتاكل لانك جوعان ولا لانك متدايق؟",
    },
  ];
  const eventsarr = [
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 1,
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",

      status: "opened",
    },
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 2,
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",
      status: "closed",
    },
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 3,
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",

      status: "opened",
    },
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 4,
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",

      status: "opened",
    },
    {
      title: "ورشة تطبيقات التغذية العلاجية ",
      id: 5,
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",

      status: "opened",
    },
    {
      id: 6,
      title: "ورشة تطبيقات التغذية العلاجية ",
      img: img1,
      overview: `
      ورشة عملية تقدّم أساسيات التغذية العلاجية وكيفية تطبيقها على الحالات الصحية بطريقة مبسّطة وواضحة.
       `,
      time: "الساعة العاشرة صباحا ",
      date: "15-4-2026",
      place: "الورشةاونلاين عبر غوغل ميت",

      status: "opened",
    },
  ];
  let posts = postsarr.slice(0, visiblePost).map((post) => {
    return (
    <Grid item size={{md:4 ,sm:6, xs:12}}  spacing={10} key={post.id}>
        <Card className="card">
          <Typography variant="h2" sx={{ margin: "10px" }}>
            {post.title}{" "}
          </Typography>

          <CardMedia component="img" height="500" image={post.img} />
          <CardContent>
            <Typography>{post.overview} </Typography>
          </CardContent>
          <Button
            sx={{
              width: "100%",
              marginTop: "20px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            color={"primary"}
            variant="contained"
            onClick={() => {
              setSelectedPost({
                content: post.content,
                sentence: post.lastsentence,
              });
              setOpenPost(true);
            }}
          >
            اقرا المزيد
          </Button>
        </Card>
      </Grid>
    );
  });

  let events = eventsarr.slice(0, visibleEvent).map((event) => {
    return (
      <Grid item  size={{md:4 ,sm:6, xs:12}} spacing={4} key={event.id}>
        <Card className={event.status == "opened" ? "card" : "closed"}>
          <Typography variant="h2" sx={{ margin: "10px" }}>
            {event.title}
          </Typography>
          <CardMedia component="img" height="500" image={eventimg1} />
          <CardContent>
            <Typography
              variant="h2"
              sx={{ margin: "20px", lineHeight: "50px" }}
            >
              {event.overview}
            </Typography>
            <Stack direction="row" sx={{ margin: "5px" }}>
              <LocationPinIcon sx={{ marginLeft: "10px" }} />
              <Typography>{event.place}</Typography>
            </Stack>
            <Stack direction="row" sx={{ margin: "5px" }}>
              <EventAvailableIcon sx={{ marginLeft: "10px" }} />
              <Typography>{event.date} </Typography>
            </Stack>
            <Stack direction="row" sx={{ margin: "5px" }}>
              <QueryBuilderIcon sx={{ marginLeft: "10px" }} />
              <Typography>{event.time} </Typography>
            </Stack>
          </CardContent>
          <Button
            disabled={event.status == "closed"}
            sx={{
              width: "100%",
              marginTop: "20px",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            color={"primary"}
            variant="contained"
            onClick={() => setOpenEventForm(true)}
          >
            بادر وانضم الينا الان
          </Button>
          <PayDialog
            open={openEventForm}
            onClose={() => setOpenEventForm(false)}
            content="سنتواصل معك في حال القبول عبر الايميل "
            title="الرجاء ادخال الايميل الخاص بك"
            onConfirm={handleConfirm}
          />
        </Card>
      </Grid>
    );
  });
  return (
    <div className="workshopspage">
      <Bar />
      <Typography variant="h4" sx={{ padding: "20px", margin: "20px" }}>
        ابقَ على اطلاع معنا بأحدث الورشات و الإعلانات
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: 10, padding: "20px" }}
        alignItems="center"
      >
        {events}
      </Grid>
      <Button
        variant="contained"
        color={"primary"}
        sx={{ marginTop: 10 }}
        disabled={visibleEvent >= eventsarr.length}
        onClick={() => {
          setVisibleEvent(visibleEvent + 3);
        }}
      >
        عرض المزيد
      </Button>
      <Divider sx={{ margin: 20 }}>
        <Typography variant="h2">ثقف نفسك!</Typography>
      </Divider>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: 10, padding: "20px" }}
        alignItems="center"
      >
        {posts}
      </Grid>
      <Button
        variant="contained"
        color={"primary"}
        sx={{ margin: 5 }}
        disabled={visiblePost >= postsarr.length}
        onClick={() => {
          setVisiblePost(visiblePost + 6);
        }}
      >
        عرض المزيد
      </Button>
      <PostPopup
        open={openPost}
        content={selectedPost.content}
        lastsen={selectedPost.sentence}
        onClose={() => setOpenPost(false)}
      />

      <Foot />
    </div>
  );
}
