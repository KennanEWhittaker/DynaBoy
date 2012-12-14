task :default do
  Rake::Task["clean"].execute
  Rake::Task["copy"].execute
  Rake::Task["concatenate"].execute
  Rake::Task["annotate"].execute
  Rake::Task["haml"].execute
  Rake::Task["sass"].execute
end

task :view do
  Dir.chdir("bin") do
    `adsf`
  end
end

task :haml do
  hamlfiles = File.join("**", "bin", "**", "*.haml")
  Dir.glob(hamlfiles).each do |file|
    `haml #{file} #{file.sub(/haml/, "html")}`
    `rm #{file}`
  end
end

task :sass do
  Dir["bin/css/*.scss"].each do |file|
    `scss #{file} #{file.sub(/scss/, "css")}`
    `rm -rf bin/css/lib`
    `rm #{file}`
  end
end

task :copy do
  `cp -rf src/* bin`
end

task :concatenate do
  `for f in bin/js/dynaboy/*.js; do (cat "${f}"; echo "\n") >> bin/js/dynaboy.js; done`
  `rm -rf bin/js/dynaboy`
end

task :clean do
  `rm -rf bin`
  `mkdir bin`
  `echo "*\n!.gitignore" >> bin/.gitignore`
end

task :annotate do
  `rocco -l javascript bin/js/dynaboy.js`
  `mkdir bin/source`
  `mv bin/js/dynaboy.html bin`
end