<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Integration Test &quot;<?php echo $testName ?>&quot;</title>
</head>
<body>
    <script language="javascript" type="text/javascript" src="http://closure-library.googlecode.com/svn/trunk/closure/goog/base.js"></script>
    <script language="javascript" type="text/javascript" src="./../../../../../twig.dev.js"></script>
<?php foreach (array_keys($templates) as $name): ?>
    <script language="javascript" type="text/javascript" src="./<?php echo $name ?>.js"></script>
<?php endforeach ?>
    <script language="javascript" type="text/javascript">
        goog.require('goog.testing.asserts');
        goog.require('goog.testing.jsunit');
        goog.require('goog.string');

<?php for ($i=0,$c=count($outputs); $i<$c; $i++): ?>

        function testOutput<?php echo $i ?>() {
            assertEquals(<?php echo json_encode($outputs[$i][3]) ?>, Twig.render(index, <?php echo json_encode(eval($outputs[$i][1].';')) ?>));
        }
<?php endfor ?>
    </script>
</body>
</html>