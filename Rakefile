task :default do
  Rake::Task["javascript"].execute
  Rake::Task["annotate"].execute
end

task :view do
  Dir.chdir("bin") do
    `adsf`
  end
end

task :javascript do
  `rm bin/js/dynaboy.js`
  `for f in src/*.js; do (cat "${f}"; echo "\n") >> bin/js/dynaboy.js; done`
end

task :annotate do
  `rm bin/dynaboy.html`
  `rocco -l javascript bin/js/dynaboy.js`
  `mv bin/js/dynaboy.html bin`
end