// termius-trial2pro.js

let body = $response.body;
let obj = JSON.parse(body);

// 修改 plan_type 和 user_type
if (obj.account) {
  if (obj.account.plan_type === "Trial") obj.account.plan_type = "Pro";
  if (obj.account.user_type === "Trial") obj.account.user_type = "Pro";
}

// 修改 access_objects 里的 title
if (Array.isArray(obj.access_objects)) {
  obj.access_objects.forEach(item => {
    if (item.title === "Trial") item.title = "Pro";
  });
}

// 修改 trial 里的 trial_type
if (obj.trial && obj.trial.trial_type === "Individual") {
  obj.trial.trial_type = "Pro";
}

$done({ body: JSON.stringify(obj) });
