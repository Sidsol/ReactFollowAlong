using System;
namespace CodingPractice
{
    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
        {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    class TreeTilt
    {
        public int tilt = 0;
        public int Tilt(TreeNode node)
        {
            FindTilt(node);
            return this.tilt;
        }
        public int FindTilt(TreeNode node)
        {
            // Return 0 if node is null 
            if (node == null)
            {
                return 0;
            }
            
            //Calculate Left and Right Trees
            var nodeLeft = FindTilt(node.left);
            var nodeRight = FindTilt(node.right);
            // Curent tilt to overall tilt
            this.tilt += Math.Abs(nodeLeft - nodeRight);
            // return sum of current node
            return nodeLeft + nodeRight + node.val;
        }
    }
}