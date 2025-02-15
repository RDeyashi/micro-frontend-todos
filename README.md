This is a Micro Frontend Angular Application for Notes Management, we are using the below command


ng new notes-workspace --no-create-application
ng g application main-app --routing --style=scss
ng g application new-todo --routing --style=scss
ng add @angular-architects/module-federation --project main-app --port 4200 --type host
ng add @angular-architects/module-federation --project new-todo --port 4300 --type remote